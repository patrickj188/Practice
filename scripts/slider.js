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
var LEFT_COLOR = 'salmon';
var RIGHT_COLOR = 'steelblue';
var LIGHT_THEME = {
    BACKGROUND: 'white',
    TEXT: 'black'
};
var DARK_THEME = {
    BACKGROUND: '#2f2f2f', // very dark gray
    TEXT: 'white'
};

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

    toggleTheme(slider.isLeft); // pass in current state of slider- > this becomes "toggle" within the toggleTheme function

    slider.isLeft = !slider.isLeft; // flip the boolean
}

function toggleTheme(toggle) {
    // for shits and gigs lets toggle a light theme / dark theme
    // we always have access to the global scope (document)
    document.body.style.background = (toggle === true) ? DARK_THEME.BACKGROUND : LIGHT_THEME.BACKGROUND;
    document.body.style.color = (toggle === true) ? DARK_THEME.TEXT : LIGHT_THEME.TEXT;
}

(function main() {
    initializeSlider();
    sliderLabel.textContent = 'Slider';
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(sliderLabel);
})();
