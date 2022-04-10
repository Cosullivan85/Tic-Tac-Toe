"use strict";

let player = 1;
const gridArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let boardFullCheck = false;

boardFullCheck = gridArray.every((e) => e !== 0);

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
