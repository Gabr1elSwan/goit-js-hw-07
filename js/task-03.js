const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryElement = document.getElementById('gallery');
// images.forEach(image => {
//   gallery.insertAdjacentHTML(
//     'beforeend',
//     `<li>
//       <img
//       alt="${image.alt}"
//       src="${image.url}"
//       height="300px"
//       width="400px"/>
//     </li>`,
//   );
// });

// let galleryElement = (arr, id) => {
//   let ul = document.getElementById(id);
//   let galleryListItem = arr =>
//     arr.map(item => {
//       let li = document.createElement('li');
//       li.insertAdjacentHTML(
//         'beforeend',
//         `<img src=${item.url} alt=${item.alt} class="gallery-img">`,
//       );
//       li.className = 'gallery-item';
//       ul.appendChild(li);
//     });
//   galleryListItem(arr);
//   document.body.appendChild(ul);
// };

// galleryElement(images, 'gallery');
