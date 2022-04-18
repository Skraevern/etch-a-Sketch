`use strict`;

const paper = document.getElementById(`paper`);
const btn16x16 = document.getElementById(`btn-16x16`);
const btn32x32 = document.getElementById(`btn-32x32`);
const btn64x64 = document.getElementById(`btn-64x64`);
const blackBtn = document.getElementById(`black-btn`);
const redBtn = document.getElementById(`red-btn`);
const greenBtn = document.getElementById(`green-btn`);
const blueBtn = document.getElementById(`blue-btn`);
const randomBtn = document.getElementById(`random-btn`);
const colorBtns = document.querySelectorAll(`.color-btn`);

console.log(typeof colorBtns);

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
    let div = document.createElement(`div`);
    div.classList.add(`div-16x16`);
    paper.appendChild(div);
  }
};

const grid32x32 = function () {
  clear();
  for (let i = 0; i < 1028; i++) {
    let div = document.createElement(`div`);
    div.classList.add(`div-32x32`);

    paper.appendChild(div);
  }
};

const grid64x64 = function () {
  clear();
  for (let i = 0; i < 4096; i++) {
    let div = document.createElement(`div`);
    div.classList.add(`div-64x64`);

    paper.appendChild(div);
  }
};

const blackColor = function () {
  removeBigButton();
  blackBtn.classList.add(`active-button`);
  paper.removeEventListener(`mouseleave`, randomColor);
  paper.addEventListener(
    `mouseover`,
    (e) => (e.target.style.backgroundColor = "black")
  );
};
const redColor = function () {
  removeBigButton();
  redBtn.classList.add(`active-button`);
  paper.removeEventListener(`mouseleave`, randomColor);
  paper.addEventListener(
    `mouseover`,
    (e) => (e.target.style.backgroundColor = "red")
  );
};
const greenColor = function () {
  removeBigButton();
  greenBtn.classList.add(`active-button`);
  paper.removeEventListener(`mouseleave`, randomColor);
  paper.addEventListener(
    `mouseover`,
    (e) => (e.target.style.backgroundColor = "green")
  );
};
const blueColor = function () {
  removeBigButton();
  blueBtn.classList.add(`active-button`);
  paper.removeEventListener(`mouseleave`, randomColor);
  paper.addEventListener(
    `mouseover`,
    (e) => (e.target.style.backgroundColor = "blue")
  );
};

const randomColor = function () {
  let randomNumber = Math.floor(Math.random() * 4);
  let color = ``;
  switch (randomNumber) {
    case 0:
      color = `black`;
      break;
    case 1:
      color = `red`;
      break;
    case 2:
      color = `green`;
      break;
    case 3:
      color = `blue`;
  }
  paper.addEventListener(
    `mouseover`,
    (e) => (e.target.style.backgroundColor = color)
  );
};
const newRandomColor = function () {
  removeBigButton();
  randomBtn.classList.add(`active-button`);
  paper.addEventListener(`mouseleave`, randomColor);
};

grid16x16();
blackColor();

btn16x16.addEventListener(`click`, grid16x16);
btn32x32.addEventListener(`click`, grid32x32);
btn64x64.addEventListener(`click`, grid64x64);
blackBtn.addEventListener(`click`, blackColor);
redBtn.addEventListener(`click`, redColor);
greenBtn.addEventListener(`click`, greenColor);
blueBtn.addEventListener(`click`, blueColor);
randomBtn.addEventListener(`click`, newRandomColor);
