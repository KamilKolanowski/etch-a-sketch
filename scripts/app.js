const board = document.querySelector(".board");
const squares = document.getElementsByClassName("square");
const clearBtn = document.querySelector('.clear-button');
const submitBtn = document.querySelector('.submit');
const inputSizeValue = document.querySelector('.input-size');
const rainbowModeBtn = document.querySelector('.rainbow-mode');
const resetColorBtn = document.querySelector('.reset-color');
let colorMode = false;

function generateBoard(size=16) {
    for (let i = 0; i < size * size; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("square");
      board.appendChild(newDiv);
  
      newSize = board.offsetWidth / size;
      newDiv.style.minWidth = `${newSize}px`;
      newDiv.style.minHeight = `${newSize}px`;
    }
}

function changeDivStyle(color="black") {
  for (let div of squares) {
    div.addEventListener("mouseover", (e) => {
      const squareStyle = e.target;
      color === 'black' ? squareStyle.style.backgroundColor = "black" : squareStyle.style.backgroundColor = generateRandomColor();
    });
  }
}

function generateRandomColor() {
  const redVal = Math.floor(Math.random(255) * 100);
  const greenVal = Math.floor(Math.random(255) * 100);
  const blueVal = Math.floor(Math.random(255) * 100);
  
  return `rgb(${redVal}, ${greenVal}, ${blueVal})`;
}

function changePaintingColor() {
  rainbowModeBtn.addEventListener('click', () => {
    const color = generateRandomColor();
    changeDivStyle(color);
    colorMode = true;
  });

  resetColorBtn.addEventListener('click', () => {
    const color = "black";
    changeDivStyle(color);
    colorMode = false;
  })
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

    let userValue = inputSizeValue.value;

    // Generate board based on user size -> if user size less than 1, default = 1, 
    // else if user provide float number, it will round to the number above.
    generateBoard(userValue < 1 ? 1 : Math.ceil(userValue));
    const colorStyle = colorMode ? generateRandomColor() : "black";
    changeDivStyle(colorStyle);

    inputSizeValue.value = '';
  });
}

function etchASketch() {
  clearBoardListener();
  generateBoard();
  drawUserSizeBoard();
  changePaintingColor()
  clearBoard();
  changeDivStyle();
}

etchASketch();