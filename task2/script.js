// script.js
let startTime, updatedTime, difference, tInterval, savedTime;
let running = false;
let laps = [];

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startStopButton.textContent = "Pause";
    } else {
        clearInterval(tInterval);
        savedTime = difference;
        running = false;
        startStopButton.textContent = "Start";
    }
}

function reset() {
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    running = false;
    display.textContent = "00:00:00";
    laps = [];
    lapsContainer.innerHTML = '';
    startStopButton.textContent = "Start";
}



function getShowTime() {
    updatedTime = new Date().getTime();
    difference = (updatedTime - startTime) + savedTime;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    display.textContent = hours + ":" + minutes + ":" + seconds;
}
