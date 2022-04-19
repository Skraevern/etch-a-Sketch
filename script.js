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
const colorBtns = document.querySelectorAll(`.color-btn`);
const rainbowBtn = document.getElementById(`rainbow-btn`);

let drawColor = `black`;
blackBtn.classList.add(`active-button`);

const clear = function () {
  paper.replaceChildren();
};

const removeBigButton = function () {
  for (const btn of colorBtns) {
    btn.classList.remove(`active-button`);
  }
};

const grid16x16 = function () {
  clear();
  for (let i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-16x16");
    gridElement.addEventListener("mouseover", changeColor);
    paper.appendChild(gridElement);
  }
};

const grid32x32 = function () {
  clear();
  for (let i = 0; i < 1028; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-32x32");
    gridElement.addEventListener("mouseover", changeColor);
    paper.appendChild(gridElement);
  }
};

const grid64x64 = function () {
  clear();
  for (let i = 0; i < 4096; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-64x64");
    gridElement.addEventListener("mouseover", changeColor);
    paper.appendChild(gridElement);
  }
};

const changeColor = function (e) {
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

const setColor = function (newColor) {
  drawColor = newColor;
  removeBigButton();
  blackBtn.classList.add(`active-button`);
};

grid16x16();

btn16x16.addEventListener(`click`, grid16x16);
btn32x32.addEventListener(`click`, grid32x32);
btn64x64.addEventListener(`click`, grid64x64);
blackBtn.onclick = function () {
  setColor(`black`);
  removeBigButton();
  blackBtn.classList.add(`active-button`);
};
redBtn.onclick = function () {
  setColor(`red`);
  removeBigButton();
  redBtn.classList.add(`active-button`);
};
greenBtn.onclick = function () {
  setColor(`green`);
  removeBigButton();
  greenBtn.classList.add(`active-button`);
};
blueBtn.onclick = function () {
  setColor(`blue`);
  removeBigButton();
  blueBtn.classList.add(`active-button`);
};

rgbBtn.onchange = function (e) {
  setColor(e.target.value);
  removeBigButton();
  rgbBtn.classList.add(`active-button`);
};
rainbowBtn.onclick = function () {
  setColor(`rainbow`);
  removeBigButton();
  rainbowBtn.classList.add(`active-button`);
};
