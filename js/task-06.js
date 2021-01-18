let userInput = document.getElementById('validation-input');
const validInput = parseInt(userInput.getAttribute('data-length'));

const validChekInput = event => {
  const input = event.currentTarget.value;
  input.length === validInput
    ? (userInput.style.borderColor = ' #4caf50')
    : (userInput.style.borderColor = '  #f44336');
};

userInput.addEventListener('blur', validChekInput);
