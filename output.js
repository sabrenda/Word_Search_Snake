// const snakingInclude = require("./wordSearch");
let color = "";

function func_randColor() {
  switch (Math.floor(Math.random() * 5 + 1)) {
    case 1: color = "color:white";
      break;
    case 2: color = "color:green";
      break;
    case 3: color = "color:blue";
      break;
    case 4: color = "color:yellow";
      break;
    case 5: color = "color:grey";
      break;
  }
}

const puzzle = [
  ["a", "k", "f", "o", "x", "e", "q"],
  ["s", "z", "y", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["a", "s", "b", "n", "u", "i", "r"],
];
function coordinateСheck(coordinates, x, y) {
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i][0] === x && coordinates[i][1] === y)
      return false;
  }
  return true;
}

function fn_around(word, puzzle, i, x, y, coordinates) {
  const mytd = document.querySelector(`.my_td_${x}_${y}`);
  if (word.length - 1 <= i) {
    mytd.style = color;
    return true;
  }

  coordinates.push([x, y])

  if ((x - 1 >= 0 && y - 1 >= 0) && puzzle[x - 1][y - 1] === word[i + 1]) {

    if (coordinateСheck(coordinates, x - 1, y - 1) && fn_around(word, puzzle, i + 1, x - 1, y - 1, coordinates)) {
      mytd.style = color;
      return true; // 1
    }
  }
  if ((x - 1 >= 0 && y >= 0) && puzzle[x - 1][y] === word[i + 1]) {

    if (coordinateСheck(coordinates, x - 1, y) && fn_around(word, puzzle, i + 1, x - 1, y, coordinates)) {
      mytd.style = color;
      return true; // 2
    }
  }
  if ((x - 1 >= 0 && y + 1 <= puzzle.length - 1) && puzzle[x - 1][y + 1] === word[i + 1]) {

    if (coordinateСheck(coordinates, x - 1, y + 1) && fn_around(word, puzzle, i + 1, x - 1, y + 1, coordinates)) {
      mytd.style = color;
      return true; // 3
    }
  }
  if ((x >= 0 && y + 1 <= puzzle.length - 1) && puzzle[x][y + 1] === word[i + 1]) {

    if (coordinateСheck(coordinates, x, y + 1) && fn_around(word, puzzle, i + 1, x, y + 1, coordinates)) {
      mytd.style = color;
      return true; // 6
    }
  }
  if ((x + 1 <= puzzle.length - 1 && y + 1 <= puzzle.length - 1) && puzzle[x + 1][y + 1] === word[i + 1]) {

    if (coordinateСheck(coordinates, x + 1, y + 1) && fn_around(word, puzzle, i + 1, x + 1, y + 1, coordinates)) {
      mytd.style = color;
      return true; // 9
    }
  }
  if ((x + 1 <= puzzle.length - 1 && y - 1 >= 0) && puzzle[x + 1][y - 1] === word[i + 1]) {

    if (coordinateСheck(coordinates, x + 1, y - 1) && fn_around(word, puzzle, i + 1, x + 1, y - 1, coordinates)) {
      mytd.style = color;
      return true; // 7
    }
  }
  if ((x + 1 <= puzzle.length - 1 && y >= 0) && puzzle[x + 1][y] === word[i + 1]) {

    if (coordinateСheck(coordinates, x + 1, y) && fn_around(word, puzzle, i + 1, x + 1, y, coordinates)) {
      mytd.style = color;
      return true; // 8
    }
  }
  if ((x >= 0 && y - 1 >= 0) && puzzle[x][y - 1] === word[i + 1]) {

    if (coordinateСheck(coordinates, x, y - 1) && fn_around(word, puzzle, i + 1, x, y - 1, coordinates)) {
      mytd.style = color;
      return true; // 4
    }
  }
  return false
}

function snakingInclude(word) {
  let coordinates = [];
  let arrCord = [];

  for (let i = 0, k = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (word[0] === puzzle[i][j]) {
        coordinates[k] = [i, j];
        k++;
      }
    }
  }

  for (let j = 0; j < coordinates.length; j++)
    if (fn_around(word, puzzle, 0, coordinates[j][0], coordinates[j][1], arrCord))
      return true
  return false;
}

let my_input = document.getElementById("input");
let button = document.querySelector(".change_word");

const table = document.querySelector('.table');
for (let i = 0; i < puzzle.length; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < puzzle.length; j++) {
    const td = document.createElement('td');
    td.className = `my_td_${i}_${j}`;
    td.innerText = puzzle[i][j].toUpperCase();
    td.style = "style:green";
    tr.appendChild(td);
    table.appendChild(tr);
  }
}
button.addEventListener("click", function () {
  func_randColor();
  const myTd = document.querySelectorAll('td');
  for (let i = 0; i < myTd.length; i++) {
    const cl = document.querySelector(`.${myTd[i].className}`);
    cl.style = 'color:black';
  }
  snakingInclude(my_input.value.toLowerCase(), puzzle);
  my_input.value = "";
});
