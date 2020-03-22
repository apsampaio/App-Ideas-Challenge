const r = document.querySelector('.r')
const g = document.querySelector('.g')
const b = document.querySelector('.b')

const rInc = document.querySelector('.r-inc')
const gInc = document.querySelector('.g-inc')
const bInc = document.querySelector('.b-inc')

let rValue = "FF"
let bValue = "FF"
let gValue = "FF"

const box = document.querySelector('body')
const btn = document.querySelector('.btn')

let handler = null
let working = false

const holder = document.querySelector('.start-holder')
const increment = document.querySelector('.increment-holder')
const timing = document.querySelector('.timing')

timing.disabled = true

document.addEventListener('keyup', () => {

  if (checkHex()) {
    holder.classList.replace('a', 'alert')
    return
  }
  else
    holder.classList.replace('alert', 'a')

  checkIncrement()

  box.style.backgroundColor = '#' + r.value + g.value + b.value
  rValue = r.value
  gValue = g.value
  bValue = b.value

})

btn.addEventListener('click', () => {

  if (!working) start()
  else stop()

})

timing.addEventListener('change', () => {
  console.log(timing.value)
  resetInterval()

})


function parseHex(value) {
  let hexValue = value.toString(16).toUpperCase()
  if (parseInt('0x' + hexValue) >= 256) return 'FF'
  else if (hexValue.length < 2) hexValue = '0' + hexValue
  return hexValue
}

function $(value) {
  const v = parseInt('0x' + value)
  if (isNaN(v)) return 0;
  else if (v >= 256) return "FF"
  return value
}

function HexToInt(value) {
  if (!value) return 0
  return parseInt('0x' + value)
}

function start() {

  btn.innerText = "STOP"
  timing.disabled = false
  r.disabled = true
  g.disabled = true
  b.disabled = true

  rInc.disabled = true
  gInc.disabled = true
  bInc.disabled = true

  startInterval()

  working = !working
}

function stop() {

  btn.innerText = "START"

  clearInterval(handler)

  timing.disabled = true
  r.disabled = false
  g.disabled = false
  b.disabled = false

  rInc.disabled = false
  gInc.disabled = false
  bInc.disabled = false

  working = !working
}

function checkHex() {

  if (
    isNaN(parseInt('0x' + r.value)) && r.value != "" ||
    isNaN(parseInt('0x' + g.value)) && g.value != "" ||
    isNaN(parseInt('0x' + b.value)) && b.value != "")
    return true
  return false

}

function checkIncrement() {

  if (rInc.value < 0) rInc.value = 0
  if (gInc.value < 0) gInc.value = 0
  if (bInc.value < 0) bInc.value = 0
}

function resetInterval() {

  clearInterval(handler)
  startInterval()
}

function startInterval() {
  handler = setInterval(() => {
    rValue = parseHex(HexToInt(rValue) + HexToInt(rInc.value))
    gValue = parseHex(HexToInt(gValue) + HexToInt(gInc.value))
    bValue = parseHex(HexToInt(bValue) + HexToInt(bInc.value))

    r.value = rValue
    g.value = gValue
    b.value = bValue

    box.style.backgroundColor = '#' + rValue + gValue + bValue
  }, timing.value)
}