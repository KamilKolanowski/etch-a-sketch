const board = document.querySelector(".board");
const squares = document.getElementsByClassName("square");
const clearBtn = document.querySelector('.clear-button');
const submitBtn = document.querySelector('.submit');
const inputSizeValue = document.querySelector('.input-size');

function generateBoard(size) {
    for (let i = 0; i < size * size; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("square");
      board.appendChild(newDiv);
  
      newSize = board.offsetWidth / size;
      newDiv.style.minWidth = `${newSize}px`;
      newDiv.style.minHeight = `${newSize}px`;
    }
}

function changeDivStyle() {
  for (let div of squares) {
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  }
}

function clearBoard() {
    for (let square of board.children) {
      square.style.backgroundColor = null;
    }
}

function clearBoardListener() {
  clearBtn.addEventListener('click', () => clearBoard());
  submitBtn.addEventListener('click', () => clearBoard());
}

function drawUserSizeBoard() { 
  submitBtn.addEventListener('click', () => {
    clearBoardListener();
    
    while(board.firstChild) {
      board.removeChild(board.lastChild);
    }

    const userValue = inputSizeValue.value;
    
    generateBoard(userValue);
    changeDivStyle();
  });
}

function etchASketch() {
  clearBoardListener();
  generateBoard(16);
  drawUserSizeBoard();
  clearBoard();
  changeDivStyle();
}

etchASketch();