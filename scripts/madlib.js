const container = document.querySelector('#madlib-container')
const label = document.createElement('label');
const inputEl = document.createElement('input')
const infoEl = document.createElement('p')
const outputEl = document.createElement('p')

infoEl.id = 'info'
label.textContent = 'Madlib';
outputEl.id = 'output'
inputEl.setAttribute('type', 'text')
container.appendChild(label)

;(function main () {
  renderInput('First question:')
})();


function renderInput(infoText) {
  if (!container.hasChildNodes()) {
    container.appendChild(inputEl);
    container.appendChild(infoEl);
  }
  infoEl.textContent = infoText;
  inputEl.value = '';
  inputEl.onkeydown = onEnter;

  function onEnter (event) {
    if (e.keyCode === 13) {
      console.log('enter', this.value);
    }
  }
}

