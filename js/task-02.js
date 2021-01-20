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
