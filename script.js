`use strict`;

let paper = document.getElementById(`paper`);
let btn16x16 = document.getElementById(`btn-16x16`);
let btn64x64 = document.getElementById(`btn-64x64`);
let blackBtn = document.getElementById(`black-btn`);
let redBtn = document.getElementById(`red-btn`);
let greenBtn = document.getElementById(`green-btn`);
let blueBtn = document.getElementById(`blue-btn`);

let clear = function () {
  paper.replaceChildren();
};

let grid16x16 = function () {
  clear();
  for (let i = 0; i < 256; i++) {
    let div = document.createElement(`div`);
    div.classList.add(`div-16x16`);
    div.setAttribute("id", "div-16x16");
    paper.appendChild(div);
  }
};

let grid64x64 = function () {
  clear();
  for (let i = 0; i < 4096; i++) {
    let div = document.createElement(`div`);
    div.classList.add(`div-64x64`);

    paper.appendChild(div);
  }
};

let markFunction = function () {};

let blackColor = function () {
  paper.addEventListener(
    `mouseover`,
    (e) => (e.target.style.backgroundColor = "black")
  );
};
let redColor = function () {
  paper.addEventListener(
    `mouseover`,
    (e) => (e.target.style.backgroundColor = "red")
  );
};
let greenColor = function () {
  paper.addEventListener(
    `mouseover`,
    (e) => (e.target.style.backgroundColor = "green")
  );
};
let blueColor = function () {
  paper.addEventListener(
    `mouseover`,
    (e) => (e.target.style.backgroundColor = "blue")
  );
};
grid16x16();
let pixel = document.getElementById("div-16x16");
blackColor();

btn16x16.addEventListener(`click`, grid16x16);
btn64x64.addEventListener(`click`, grid64x64);
blackBtn.addEventListener(`click`, blackColor);
redBtn.addEventListener(`click`, redColor);
greenBtn.addEventListener(`click`, greenColor);
blueBtn.addEventListener(`click`, blueColor);
