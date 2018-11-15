var clockContainer = document.getElementById('clock-container');
var clockDisplay = document.createElement('div'); // I'm just a div...
var clockLabel = document.createElement('label');

var ONE_SECOND = 1000; // javascript usually deals in milliseconds

// define our function - this code does not run until we call it later on as a callback for window.setInterval()
function updateClockTime() {
    console.log('update time') // see this message in your dev tools console
    var now = new Date(); // type this in your browser console- it returns a JavaScript Date object
    var hours = now.getHours(); // Javscript Date objects have methods already on them like this one
    var minutes = now.getMinutes(); // ... and these ones 
    var seconds = now.getSeconds(); // ^^^

    var outputTime = `${hours}:${minutes}:${seconds}`;
    // var output = hours + ':' + minutes + ':' + seconds; // the other way to use variables in a string
    
    // The bread n butter... change the textContent of our clock element
    clockDisplay.textContent = outputTime;
}

// this weird syntax of wrapping the function definition in parenthesis is called IIFE - look it up)
// this causes main to run immediately after it is defined
(function main() {
    clockDisplay.id = 'clock-display'; // set the id for our newly created element
    clockLabel.textContent = 'Clock';
    clockContainer.appendChild(clockLabel);
    clockContainer.appendChild(clockDisplay); // we created "clockDisplay" div element above, but now we need to append it to something already in the DOM- otherwise it just floats around here
    updateClockTime();
    window.setInterval(updateClockTime, ONE_SECOND); // Run our "updateClockTime function every second"
})()
