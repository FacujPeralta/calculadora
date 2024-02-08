let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = '';
    document.getElementById('display').value = 'Error';
  }
}

// Escuchar eventos de teclado
document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/[0-9\.\+\-\*\/]/.test(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
