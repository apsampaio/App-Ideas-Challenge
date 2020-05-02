# IOT Mailbox Simulator

**Tier:** 1-Beginner

The objective of the IOT Mailbox Simulator is to mimic how an Internet of Things
(IOT) enabled physical mailbox might be used to notify you when "snail" mail
has arrived. In doing so it will provide you with experience using callbacks
to communicate state between different components of an app that are dependent
on one another.

### Requirements & Constraints

- Even though this app is specified using Javascript concepts and terminology
  you are free to implement it in the language of your choice.

## User Stories

- [x] User can see a web page containing a control panel containing three
      buttons - 'Start Monitoring', 'Stop Monitoring', and 'Reset'.
- [x] User can see a notification panel where the mailbox status will be posted.
- [x] User can see a scrollable log panel where execution details describing
      the apps operation and interface with the IOTMailbox instance will be posted.
- [x] User can click the 'Start Monitoring' button to begin receiving state
      notifications from the mailbox.
- [x] User can see a message added to the log panel when monitoring starts.
- [x] User can see a message added to the log panel for light level passed
      through the callback function. This should include the numerical light level
      and whether the door is open or closed.
- [x] User can see a message added to the notification panel when the door has
      been opened.
- [x] User can click the 'Stop Monitoring' button to stop receiving state
      notifications from the mailbox.
- [x] User can see a message added to the log panel when monitoring stops.

## Bonus features

- [x] User can see the 'Start Monitoring' button disabled until monitoring is
      stopped.
- [x] User can see the 'Stop Monitoring' button disabled until monitoring is
      started.
- [ ] User can see an field in the control panel allowing the length of the
      monitoring interval to be specified.
- [x] User can see a message added to the notification panel if the door is
      left open.
- [ ] User can hear an audible alert when the door is opened.

## Useful links and resources

- [Snail Mail (Wikipedia)](https://en.wikipedia.org/wiki/Snail_mail)
- [Internet of Things (Wikipedia)](https://en.wikipedia.org/wiki/Internet_of_things)
- [IOT Mailbox: An Introduction](https://iotexpert.com/2018/08/13/iot-mailbox-an-introduction/)
- [What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
- [window.setInterval (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

## Result

To have the same experience with this project, is necessary to load the **WebSocket.ino** on a NodeMCU board, with a Ultrasonic Sensor with the follow connection:

- D3 (NodeMCU) -> ECHO (Sensor)
- D4 (NodeMCU) -> TRIGGER (Sensor)
- GND (NodeMCU) -> GND (Sensor)
- 3.3v (NodeMCU) -> 3.3v (Sensor)

> ### See the simulation of the result live [codepen.io](https://codepen.io/apsampaio/full/ZEbXMgg)
>
> [![codepen.io](https://github.com/apsampaio/App-Ideas-Challenge/blob/master/Beginner/IOTMailbox/src/img/prev.png?raw=true)](https://codepen.io/apsampaio/full/ZEbXMgg)
