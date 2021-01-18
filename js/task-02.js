// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listElement = document.querySelector('#ingredients');

ingredients.forEach(item => {
  const listNewItem = document.createElement('li');
  listNewItem.textContent = item;
  listElement.append(listNewItem);
});

console.log(listElement);
