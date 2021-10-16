const btnChangeColorRef = document.querySelector('.change-color');
const spancolorRef = document.querySelector('.color');

btnChangeColorRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  console.log(newColor);
  document.body.style.background = `${newColor}`;
  spancolorRef.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}