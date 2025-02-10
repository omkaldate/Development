console.log("in the js file");

function updateClock() {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let timeOfDay = (hours < 12) ? "AM" : "PM";

    let str = hours+ ":" + minutes + ":" + seconds+ " " + timeOfDay;

    let clock = document.getElementById('clock');
    clock.innerHTML = str;
}

updateClock();
setInterval(updateClock, 1000);
