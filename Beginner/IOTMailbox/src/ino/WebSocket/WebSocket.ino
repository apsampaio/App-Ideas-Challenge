#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <WebSocketsServer.h>

#define ECHO 0  // D3
#define TRIGGER 2 // D4

/* 

> 11  = Box Opened
> 7 < 11cm = Box Closed
> 0 < 7 = Mail

*/

bool mail = false;
bool closed = false;
bool opened = false;
bool monitoring = false;

ESP8266WebServer server;
WebSocketsServer webSocket = WebSocketsServer(81);

char* ssid = "SSID";
char* password = "PASS";

void setup()
{
  pinMode(ECHO, INPUT);
  pinMode(TRIGGER, OUTPUT);
  
  Serial.begin(9600);
  
  //==== WIFI ONLY ====
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid,password);
  while(WiFi.status()!=WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println("");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
 //==================================
 
  webSocket.begin();
  webSocket.onEvent(webSocketEvent);
}

void loop() {
  
  webSocket.loop();
  readSensor();
  delay(1000);

}

void readSensor(void){
  long duration;
  int distance;
 // Clears the TRIGGER
  digitalWrite(TRIGGER, LOW);
  delayMicroseconds(2);

// Sets the TRIGGER on HIGH state for 10 micro seconds
  digitalWrite(TRIGGER, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER, LOW);

  // Reads the ECHO, returns the sound wave travel time in microseconds
  duration = pulseIn(ECHO, HIGH);
  
  // Calculating the distance
  distance= duration*0.034/2;
  // Prints the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.println(distance);

  if(distance < 8 && monitoring) {
    if(mail) return;
    mail = true;
    closed = false;
    opened = false;
    webSocket.broadcastTXT("MAIL", sizeof("MAIL"));
  }
  else if(distance > 7 && distance < 12 && monitoring) {
    if(closed) return;
    mail = false;
    closed = true;
    opened = false;
    webSocket.broadcastTXT("BOX CLOSED", sizeof("BOX CLOSED"));
  }
   else if(distance > 12 && monitoring) {
    if(opened) return;
    mail = false;
    closed = false;
    opened = true;
    webSocket.broadcastTXT("BOX OPENED", sizeof("BOX OPENED"));
  }
}

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length){
      
  if(type == WStype_TEXT){
       monitoring = payload[0] == 49
      ? true
      : false
      ;
  }  
}

