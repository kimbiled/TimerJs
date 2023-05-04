let hourElement = document.querySelector('.hour');
let minuteElement = document.querySelector('.minute');
let secondElement = document.querySelector('.second');
let milisecondElement = document.querySelector('.milisecond');

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const lapButton = document.querySelector('.lap')
let counter = 0

startButton.addEventListener('click', ()=>{
    clearInterval(interval)
    interval = setInterval (setTimer,1)
})

pauseButton.addEventListener('click', ()=>{
    clearInterval(interval)
})

stopButton.addEventListener('click', ()=>{
    clearInterval(interval)
    clearTimer()
})

lapButton.addEventListener('click', ()=>{
   counter++
   clearInterval(interval);
   const results = document.querySelector('.results')
   const block = document.createElement('div')
   block.innerText += `Result ${counter}: ${hour} : ${minute} : ${second} : ${milisecond}`
   results.append(block)
   clearTimer()
   clearInterval(interval)
   interval = setInterval(setTimer, 10)
})

let hour = 00,
    minute = 00,
    second = 00,
    milisecond = 00,
    interval;

function setTimer() {
     milisecond++;
     //milisecond
     if(milisecond<9){
        milisecondElement.innerText = "0" + milisecond
     }

     if(milisecond>9){
        milisecondElement.innerText = milisecond
     }

     if(milisecond > 99)
     {
        second++;
        secondElement.innerText = "0" + second
        milisecond = 0
        milisecondElement.innerText = "0" + milisecond
     }

     //second
     if(second<9){
        secondElement.innerText = "0" + second
     }

     if(second>9){
        secondElement.innerText = second
     }

     if(second > 59)
     {
        minute++;
        minuteElement.innerText = "0" + minute
        second = 0
        secondElement.innerText = "0" + second
     }

     //minute
     if(minute>9){
        minuteElement.innerText = minute
     }

     //hour
     if(hour>9){
        hourElement.innerText = hour
     }
}

function clearTimer() {
    hour = 00
    minute = 00
    second = 00
    milisecond = 00 
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    milisecondElement.textContent = "00"
}