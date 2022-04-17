`use strict`;

let paper = document.getElementById(`paper`);
let btn16x16 = document.getElementById(`btn-16x16`);
let btn64x64 = document.getElementById(`btn-64x64`);

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

grid16x16();

paper.addEventListener(`mouseover`, (e) => e.target.classList.add(`active`));

btn16x16.addEventListener(`click`, grid16x16);
btn64x64.addEventListener(`click`, grid64x64);
