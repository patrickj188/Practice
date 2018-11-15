var clockContainer = document.getElementById('clock-container');
var clock = document.createElement('div');
clockContainer.appendChild(clock);

var ONE_SECOND = 1000; // javascript usually deals with milliseconds

// define our function - this code does not run until we call it later on as a callback for window.setInterval()
function updateClockTime() {
    console.log('update time') // see this message in your dev tools console
    var now = new Date(); // try this in your browser console- it returns a JavaScript Date object
    var hours = now.getHours(); // Javscript Date objects have methods already on them like this one
    var minutes = now.getMinutes(); // ... and these ones
    var seconds = now.getSeconds();
    
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

(function main() {
    clockContainer.appendChild(clock);
    window.setInterval(updateClockTime, ONE_SECOND); // Run our "updateClockTime function every second"
})()