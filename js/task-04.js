// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = document.getElementById('value');
let counter = 0;
const counterInc = document.querySelector("button[data-action = 'increment']");
const counterDec = document.querySelector("button[data-action = 'decrement']");

const inc = () => (counterValue.textContent = ++counter);
const dec = () => (counterValue.textContent = --counter);

counterInc.addEventListener('click', inc);
counterDec.addEventListener('click', dec);
