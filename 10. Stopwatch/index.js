// script for stopwatch

const display = document.getElementById("displayContainer");

let startTime = 0;
let elapseTime = 0;
let isRunning = false;
let timer = null;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapseTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapseTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapseTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapseTime = currentTime - startTime;
    console.log();

    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minute = Math.floor(elapseTime / (1000 * 60) % 60);
    let second = Math.floor(elapseTime / 1000 % 60);
    let milisecond = Math.floor(elapseTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");
    milisecond = String(milisecond).padStart(2, "0");

    display.textContent = `${hours}:${minute}:${second}:${milisecond}`;
}