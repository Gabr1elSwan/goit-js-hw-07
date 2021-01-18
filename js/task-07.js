let slider = document.getElementById('font-size-control');
let text = document.getElementById('text');

slider.oninput = () => {
  text.style.fontSize = slider.value / 1 + 'px';
};
