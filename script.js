`use strict`;

const paper = document.getElementById(`paper`);
const btn16x16 = document.getElementById(`btn-16x16`);
const btn32x32 = document.getElementById(`btn-32x32`);
const btn64x64 = document.getElementById(`btn-64x64`);
const blackBtn = document.getElementById(`black-btn`);
const redBtn = document.getElementById(`red-btn`);
const greenBtn = document.getElementById(`green-btn`);
const blueBtn = document.getElementById(`blue-btn`);
const rgbBtn = document.getElementById(`rgb-btn`);
const rainbowBtn = document.getElementById(`rainbow-btn`);
const colorBtns = document.querySelectorAll(`.color-btn`);

let drawColor;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const setColor = function (newColor) {
  drawColor = newColor;
};

const removeBigButton = function () {
  for (const btn of colorBtns) {
    btn.classList.remove(`active-button`);
  }
};

const newGrid = function (gridSize) {
  paper.replaceChildren();
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add(`grid-${gridSize}x${gridSize}`);
    gridElement.addEventListener("mouseover", changeColor);
    paper.appendChild(gridElement);
  }
};

const changeColor = function (e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (drawColor === `rainbow`) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (drawColor === `rgb`) {
    e.target.style.backgroundColor = e;
  } else {
    e.target.style.backgroundColor = drawColor;
  }
};

window.onload = () => {
  drawColor = `black`;
  blackBtn.classList.add(`active-button`);
  newGrid(16);
};

btn16x16.onclick = () => newGrid(16);
btn32x32.onclick = () => newGrid(32);
btn64x64.onclick = () => newGrid(64);
blackBtn.onclick = () => {
  setColor(`black`);
  removeBigButton();
  blackBtn.classList.add(`active-button`);
};
redBtn.onclick = () => {
  setColor(`red`);
  removeBigButton();
  redBtn.classList.add(`active-button`);
};
greenBtn.onclick = () => {
  setColor(`green`);
  removeBigButton();
  greenBtn.classList.add(`active-button`);
};
blueBtn.onclick = () => {
  setColor(`blue`);
  removeBigButton();
  blueBtn.classList.add(`active-button`);
};

rgbBtn.onchange = (e) => {
  setColor(e.target.value);
  removeBigButton();
  rgbBtn.classList.add(`active-button`);
};
rainbowBtn.onclick = () => {
  setColor(`rainbow`);
  removeBigButton();
  rainbowBtn.classList.add(`active-button`);
};
