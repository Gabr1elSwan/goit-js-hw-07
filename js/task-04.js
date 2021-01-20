let counterValue = document.getElementById('value');
let counter = 0;
const counterInc = document.querySelector("button[data-action = 'increment']");
const counterDec = document.querySelector("button[data-action = 'decrement']");

const inc = () => (counterValue.textContent = ++counter);
const dec = () => (counterValue.textContent = --counter);

counterInc.addEventListener('click', inc);
counterDec.addEventListener('click', dec);
