const board = document.querySelector(".board");
const clearBtn = document.querySelector('.clear-button');
const rainbowBtn = document.querySelector('.rainbow-mode');

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
console.log(`${board.offsetWidth} / 16`);
function changeDivStyle() {
  const squares = document.getElementsByClassName("square");
  for (let div of squares) {
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  }
}

function clearBoard() {
  clearBtn.addEventListener('click', () => {
    for (let square of board.children) {
      square.style.backgroundColor = null;
    }
  });
}

function rainbowMode() { 
  // tbd;
}

function etchASketch() {
  generateBoard(26);
  clearBoard();
  changeDivStyle();
}

etchASketch();