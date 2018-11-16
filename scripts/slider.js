var sliderContainer = document.getElementById('slider-container');
var slider = document.createElement('div');
var sliderLabel = document.createElement('label');

/*
 * Traditionally these are called CONSTANTS as they are variables that we don't plan on changing as the program runs
 * They are best located toward the top of the file so they can be easily changed if needed
 * For example: LEFT_POSITION is used multiple times in the program and if later I need to change it to 22% or 120px I only have to change that number in ONE place
 */
var LEFT_POSITION = '20%';
var RIGHT_POSITION = '80%';
var LEFT_COLOR = 'steelblue';
var RIGHT_COLOR = 'salmon';

// the styles can be set in CSS file, but I chose to do it here for visibility
function initializeSlider() {
    slider.id = 'slider';
    slider.style.background = LEFT_COLOR;
    slider.style.left = LEFT_POSITION;
    slider.isLeft = true; // setting a custom property to tell which side its on
    slider.onclick = slide; // tell the element what to do when you click it
}

function slide() {
    console.log('slide!');
    // this is called a Ternary. It can replace a simple if/else statement
    slider.style.left = slider.isLeft ? RIGHT_POSITION : LEFT_POSITION;
    slider.style.background = slider.isLeft ? RIGHT_COLOR : LEFT_COLOR;
    slider.isLeft = !slider.isLeft; // flip the boolean
}

(function main() {
    initializeSlider();
    sliderLabel.textContent = 'Slider';
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(sliderLabel);
})();
