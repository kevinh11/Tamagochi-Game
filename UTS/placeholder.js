today = new Date()

const clock = document.getElementById("clock")
let millisecondsUTC
let canUpdateTime = true
let today

let greetingText = document.getElementById("greeting")
//time-related functions
function getCurrentTime() {

  hours = today.getHours() 
  minutes = today.getMinutes() 
  seconds = today.getSeconds()

  millisecondsUTC = Date.now()

}
function scaleToGameTime() {
  const timeScale = 10
  let timeDiff = (Date.now() - millisecondsUTC)*timeScale;


  formatTimeDiff(timeDiff)

}

function formatTimeDiff(timediff) {
  //1 hour = 3 600 000 ms, 1 minute = 60 000ms, 1 second = 1000ms
  let diffminutes = timediff/60000
  let diffseconds = timediff/1000

  minutes = Math.floor(minutes+ diffminutes) < 60 ? Math.floor(minutes+ diffminutes) : 0
  seconds = Math.floor(seconds + diffseconds) < 60 ? Math.floor (seconds + diffseconds) : 0

  if (minutes == 0)
    hours = hours < 24? ++hours : 0;
  
  console.log("format function has finished running!")

}

function setClockText() {
  const hoursText = hours < 10 ? `0${hours}` : `${hours}`
  const minutesText = minutes < 10 ? `0${minutes}` : `${minutes}`
  const secondsText = seconds < 10 ? `0${seconds}` : `${seconds}`
  clock.textContent = hoursText+":"+minutesText+":"+secondsText

  console.log("clock text function has started running!")
}

//update internal/game clock & related stuff

let timeLoopCount = 0;
setInterval(()=> {
  if (canUpdateTime) {
    if (timeLoopCount == 0)
      getCurrentTime()
  
    scaleToGameTime()
    setClockText()
    setGreeting()
    timeLoopCount++

  }
 
},100)