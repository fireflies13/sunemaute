const canvas = document.getElementById('golBoard');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
var minHeight = 100;
var minWidth = 100;
canvas.addEventListener('mousedown', function(e)
{
  handleCanvasClick(this, e);
});

var RESOLUTION = 20;
var minRes = 5;

var ROWS = canvas.height / RESOLUTION;
var COLUMNS = canvas.width / RESOLUTION;


const runBox = document.getElementById('runCheckbox');
runBox.addEventListener('change', function(e)
{
  if (this.checked) {
    gameLoop(this);
  }
});
var tickLength = 500;



// --- MAIN ---
var GRID = initGrid();
console.log(GRID);

draw(GRID);


// ---------- INPUT ----------
function handleCanvasClick(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  let row = Math.floor(y / RESOLUTION);
  let col = Math.floor(x / RESOLUTION);

  // toggle cell state
  GRID[row][col] = !GRID[row][col];

  draw(GRID);
}

function clearGame() {
  // set all elements in GRID-Array to false
  for (let row = 0; row < GRID.length; row++){
    for (let col = 0; col < GRID[row].length; col++) {
      GRID[row][col] = false;
    }
  }
  draw(GRID);

  console.clear();
}

function setTickLength(value) {
  tickLength = value;
}
function setResolution(value) {
  if (value < minRes) {
    value = minRes;
  }
  RESOLUTION = value;

  ROWS = canvas.height / RESOLUTION;
  COLUMNS = canvas.width / RESOLUTION;

  GRID = initGrid();
  draw(GRID);
}
function setCanvasHeight(value) {
  if (value < minHeight) {
    value = minHeight;
  }
  canvas.height = value;

  ROWS = canvas.height / RESOLUTION;
  COLUMNS = canvas.width / RESOLUTION;

  GRID = initGrid();
  draw(GRID);
}
function setCanvasWidth(value) {
  if (value < minWidth) {
    value = minWidth;
  }
  canvas.width = value;

  ROWS = canvas.height / RESOLUTION;
  COLUMNS = canvas.width / RESOLUTION;

  GRID = initGrid();
  draw(GRID);
}

// ---------- OUTPUT ----------
function drawCell(color, x, y, width, height){
  // draw a cell
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.strokeStyle = "#ccc";
  ctx.rect(x, y, width, height);
  ctx.stroke();
  ctx.fill();
}

function draw(grid) {
  // draw a grid
  // start with 2 to make seem endlessly
  for (let row = 2; row < grid.length-2; row++){
    for (let col = 2; col < grid[row].length-2; col++) {
      let cell = grid[row][col];

      // fill cell according to state
      let color = (cell)? "#333" : "#fff";

      drawCell(color, col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);

    }
  }
}



// ---------- LOGIC ----------

function getNeighbourAmount(row,col) {
  let amount = 0;

  for (var i = 0; i < 3; i++){
    let iRow = row-1 + i;
    // check if row is in board
    if (iRow >= 0 && iRow < ROWS) {
      for (var ii = 0; ii < 3; ii++) {
        let iCol = col-1 + ii;
        // check if column is in board
        if (iCol >= 0 && iCol < COLUMNS) {
          // increment neightbour amount if not self (self: i = ii = 1)
          if (GRID[iRow][iCol] && !(i == 1 && ii == 1)) {
            amount += 1;
          }

        }
      }
    }
  }

  return amount;

}


// ---------- GENERAL ----------
function initGrid() {
  let grid = new Array(ROWS).fill(null);

  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(COLUMNS).fill(false);
  }
  return grid;
}

// return deep copy of Array[][]
function copyBoard(sourceBoard) {
  let newBoard = new Array(sourceBoard.length).fill(null);
  for (var i = 0; i < sourceBoard.length; i++) {
    newBoard[i] = new Array(sourceBoard[i].length).fill(false);
  }


  for (var i = 0; i < sourceBoard.length; i++) {
    for (var ii = 0; ii < sourceBoard[i].length; ii++) {
      newBoard[i][ii] = sourceBoard[i][ii];
    }
  }

  return newBoard;
}

function getNextGenGrid() {

  let nextGenGrid = copyBoard(GRID);

  for (var row = 0; row < GRID.length; row++){
    for (var col = 0; col < GRID[row].length; col++) {
      let cell = nextGenGrid[row][col];

      let neighbours = getNeighbourAmount(row, col)

      // if (cell) {
      //   console.log("ROW:",row, "COL:",col, " - ADJACENT:", neighbours);
      // }

      // 1. Any live cell with fewer than two live neighbours dies.
      // 2. Any live cell with more than three live neighbours dies
      if ((neighbours < 2) || (neighbours > 3)) {
        nextGenGrid[row][col] = false;
      }
      // 4. Any dead cell with exactly three live neighbours becomes a live cell.
      else if (neighbours == 3) {
        nextGenGrid[row][col] = true;
      }

    }
  }

  return nextGenGrid;

}

function gameTick() {
  // emulate grid of next generation
  let nextGenGrid = getNextGenGrid();

  // overwrite current board with next generation grid
  for (var i = 0; i < GRID.length; i++) {
    for (var ii = 0; ii < GRID[i].length; ii++) {
      GRID[i][ii] = nextGenGrid[i][ii];
    }
  }

    draw(GRID);

  }

  function gameLoop(runBox) {
    // end loop when runBox unchecked
    if (!runBox.checked){
      return;
    }

    gameTick();

    // loop on after n=tickLength many seconds
    setTimeout(function() {
      gameLoop(runBox);
    }, tickLength);
}
