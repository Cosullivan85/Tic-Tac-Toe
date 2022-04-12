"use strict";

let player = 2;
const gridArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let boardFullCheck = false;
let checkWin = false;

// check if board is full on each click and if there is a winner
document.addEventListener("click", function () {
  boardFullCheck = gridArray.every((e) => e !== 0);
  if (
    //top row all the same value
    gridArray[0] !== 0 &&
    gridArray[0] === gridArray[1] &&
    gridArray[1] === gridArray[2]
  ) {
    console.log(`Player ${player} is the winner!`);
  } else if (
    //middle row all the same value
    gridArray[3] !== 0 &&
    gridArray[3] === gridArray[4] &&
    gridArray[4] === gridArray[5]
  ) {
    console.log(`Player ${player} is the winner!`);
  } else if (
    //bottom row all the same value
    gridArray[6] !== 0 &&
    gridArray[6] === gridArray[7] &&
    gridArray[7] === gridArray[8]
  ) {
    console.log(`Player ${player} is the winner!`);
  } else if (
    //left column all the same value
    gridArray[0] !== 0 &&
    gridArray[0] === gridArray[3] &&
    gridArray[3] === gridArray[6]
  ) {
    console.log(`Player ${player} is the winner!`);
    console.log(boardFullCheck);
  } else if (
    //middle column all the same value
    gridArray[1] !== 0 &&
    gridArray[1] === gridArray[4] &&
    gridArray[4] === gridArray[7]
  ) {
    console.log(`Player ${player} is the winner!`);
    console.log(boardFullCheck);
  } else if (
    //right column all the same value
    gridArray[2] !== 0 &&
    gridArray[2] === gridArray[5] &&
    gridArray[5] === gridArray[8]
  ) {
    console.log(`Player ${player} is the winner!`);
    console.log(boardFullCheck);
  } else if (
    //left diagonal all the same value
    gridArray[0] !== 0 &&
    gridArray[0] === gridArray[4] &&
    gridArray[4] === gridArray[8]
  ) {
    console.log(`Player ${player} is the winner!`);
    console.log(boardFullCheck);
  } else if (
    //right diagonal all the same value
    gridArray[2] !== 0 &&
    gridArray[2] === gridArray[4] &&
    gridArray[4] === gridArray[6]
  ) {
    console.log(`Player ${player} is the winner!`);
  }
  console.log(boardFullCheck);
});

//Listen for click and place X or O in box-x-1
document.querySelector(".box-x-1").addEventListener("click", function () {
  if (!gridArray[0]) {
    if (player === 1) {
      document.querySelector(".box-x-1").textContent = "X";
      gridArray[0] = "X";
    } else if (player === 2) {
      document.querySelector(".box-x-1").textContent = "O";
      gridArray[0] = "O";
    }
  }
});

// Listen for click and place X or O in box-x-2
document.querySelector(".box-x-2").addEventListener("click", function () {
  if (!gridArray[1]) {
    if (player === 1) {
      document.querySelector(".box-x-2").textContent = "X";
      gridArray[1] = "X";
    } else if (player === 2) {
      document.querySelector(".box-x-2").textContent = "O";
      gridArray[1] = "O";
    }
  }
});

// Listen for click and place X or O in box-x-3
document.querySelector(".box-x-3").addEventListener("click", function () {
  if (!gridArray[2]) {
    if (player === 1) {
      document.querySelector(".box-x-3").textContent = "X";
      gridArray[2] = "X";
    } else if (player === 2) {
      document.querySelector(".box-x-3").textContent = "O";
      gridArray[2] = "O";
    }
  }
});

// Listen for click and place X or O in box-y-1
document.querySelector(".box-y-1").addEventListener("click", function () {
  if (!gridArray[3]) {
    if (player === 1) {
      document.querySelector(".box-y-1").textContent = "X";
      gridArray[3] = "X";
    } else if (player === 2) {
      document.querySelector(".box-y-1").textContent = "O";
      gridArray[3] = "O";
    }
  }
});

// Listen for click and place X or O in box-y-2
document.querySelector(".box-y-2").addEventListener("click", function () {
  if (!gridArray[4]) {
    if (player === 1) {
      document.querySelector(".box-y-2").textContent = "X";
      gridArray[4] = "X";
    } else if (player === 2) {
      document.querySelector(".box-y-2").textContent = "O";
      gridArray[4] = "O";
    }
  }
});

// Listen for click and place X or O in box-y-3
document.querySelector(".box-y-3").addEventListener("click", function () {
  if (!gridArray[5]) {
    if (player === 1) {
      document.querySelector(".box-y-3").textContent = "X";
      gridArray[5] = "X";
    } else if (player === 2) {
      document.querySelector(".box-y-3").textContent = "O";
      gridArray[5] = "O";
    }
  }
});

// Listen for click and place X or O in box-z-1
document.querySelector(".box-z-1").addEventListener("click", function () {
  if (!gridArray[6]) {
    if (player === 1) {
      document.querySelector(".box-z-1").textContent = "X";
      gridArray[6] = "X";
    } else if (player === 2) {
      document.querySelector(".box-z-1").textContent = "O";
      gridArray[6] = "O";
    }
  }
});

// Listen for click and place X or O in box-z-2
document.querySelector(".box-z-2").addEventListener("click", function () {
  if (!gridArray[7]) {
    if (player === 1) {
      document.querySelector(".box-z-2").textContent = "X";
      gridArray[7] = "X";
    } else if (player === 2) {
      document.querySelector(".box-z-2").textContent = "O";
      gridArray[7] = "O";
    }
  }
});

// Listen for click and place X or O in box-z-3
document.querySelector(".box-z-3").addEventListener("click", function () {
  if (!gridArray[8]) {
    if (player === 1) {
      document.querySelector(".box-z-3").textContent = "X";
      gridArray[8] = "X";
    } else if (player === 2) {
      document.querySelector(".box-z-3").textContent = "O";
      gridArray[8] = "O";
    }
  }
});
