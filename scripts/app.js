const board = document.querySelector(".board");
const clearBtn = document.querySelector('.clear-button');
const size8 = document.querySelector('.rainbow-mode');
// const rainbowBtn = document.querySelector('.rainbow-mode');
// const rainbowBtn = document.querySelector('.rainbow-mode');

function generateBoard(size) {
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    board.appendChild(newDiv);

    // newSize = size / 16;
    // if (size === 8) {
    //   newDiv.style.padding = "2rem";
    // }
    // else if (size === 16) {
    //   newDiv.style.padding = "1rem";
    // }
    // else if (size === 32) {
    //   newDiv.style.padding = "0.5rem";
    // }

    newSize = size / 16;
    newDiv.style.padding = `${newSize}rem`;
  }
}

function changeDivStyle() {
  const squares = document.getElementsByClassName("square");
  for (let div of squares) {
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  }
}

// function changeBoardSize() {

// }

function clearBoard() {
  clearBtn.addEventListener('click', () => {
    for (let square of board.children) {
      square.style.backgroundColor = null;
    }
  });
}

function etchASketch() {
  generateBoard(16);
  clearBoard();
  changeDivStyle();
}

etchASketch();