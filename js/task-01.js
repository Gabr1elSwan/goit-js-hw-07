const categoriesElement = document.querySelectorAll('.item');
console.dir(`В списке - ${categoriesElement.length} категории`);

categoriesElement.forEach(item => {
  const titleElement = item.querySelector('h2');
  const categoriesItemElements = item.querySelectorAll('ul li');
  console.log(`Катгория: ${titleElement.textContent}`);
  console.log(`Количество элементов: ${categoriesItemElements.length}`);
});
