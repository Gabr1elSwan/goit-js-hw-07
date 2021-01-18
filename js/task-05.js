let nameOutput = document.getElementById('name-output');
let nameInput = document.getElementById('name-input');

nameInput.oninput = () => {
  if (nameInput.value === '') {
    nameOutput.innerHTML = 'незнакомец!';
  } else {
    nameOutput.innerHTML = nameInput.value;
  }
};
