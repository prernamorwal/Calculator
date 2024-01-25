function playSound() {
  // Replace 'click.mp3' with your actual sound file
  var audio = new Audio('clicktone.wav');
  audio.autoplay = true;  // Explicitly set autoplay to true
  audio.play();
}

function addToDisplay(value) {
  currentDisplay += value;
  document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = '';
  document.querySelector('#display').value = currentDisplay;
}

function calculate() {
  currentDisplay = eval(currentDisplay);
  document.querySelector('#display').value = currentDisplay;
}