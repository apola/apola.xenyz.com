// Tetrix: tetris from every direction
//
// For the sake of simplicity, all directions are relative.
// That is, when a block is falling from the left toward the center,
// moveFallingBlockLeft moves the falling block down on the screen.

// function aliases
function $i(id) {return document.getElementById(id);}

// variable initializers
var canvas;
var context;
var timeout;
var fallenTiles;
var fallingBlock;
var fallSpeed = 500;

// constants
const TILE_WIDTH = 25; // tile = square
const TILE_HEIGHT = 25; // an I block is 4 tiles in a line, for example
var FIELD_WIDTH; // measured in # of tiles
var FIELD_HEIGHT; // these are vars only because they vary depending on screen size

var blockL = [[1, 1, 1],
			  [1, 0, 0]];
var blockJ = [[1, 1, 1],
			   [0, 0, 1]];
var blockS = [[0, 1, 1],
			  [1, 1, 0]];
var blockZ = [[1, 1, 0],
			  [0, 1, 1]];
var blockT = [[1, 1, 1],
			  [0, 1, 0]];
var blockO = [[1, 1],
			  [1, 1]];
var blockI = [[1, 1, 1, 1]];


////////////////////////////////////////
// BLOCK MANIPULATION
////////////////////////////////////////

function addNewBlock(type)
{
	switch(type)
	{
		case "*":
			var newBlock = Math.floor((Math.random() * 7) + 1);
			if (newBlock == 1)
				fallingBlock = [0, 0, "blue", blockL];
			else if (newBlock == 2)
				fallingBlock = [0, 0, "green", blockJ];
			else if (newBlock == 3)
				fallingBlock = [0, 0, "yellow", blockS];
			else if (newBlock == 4)
				fallingBlock = [0, 0, "orange", blockZ];
			else if (newBlock == 5)
				fallingBlock = [0, 0, "red", blockT];
			else if (newBlock == 6)
				fallingBlock = [0, 0, "purple", blockO];
			else if (newBlock == 7)
				fallingBlock = [0, 0, "cyan", blockI];
			break;
		case "L":
			fallingBlock = [0, 0, "blue", blockL];
			break;
		case "J":
			fallingBlock = [0, 0, "green", blockJ];
			break;
		case "S":
			fallingBlock = [0, 0, "yellow", blockS];
			break;
		case "Z":
			fallingBlock = [0, 0, "orange", blockZ];
			break;
		case "T":
			fallingBlock = [0, 0, "red", blockT];
			break;
		case "O":
			fallingBlock = [0, 0, "purple", blockO];
			break;
		case "I":
			fallingBlock = [0, 0, "cyan", blockI];
			break;
	}
	drawBlocks();
}

function canMoveFallingBlockDown()
{
	for (var row = 0; row < fallingBlock[3].length; row++)
	{
		for (var col = 0; col < fallingBlock[3][row].length; col++)
		{
			if (fallingBlock[3][row][col] == 1)
			{
				if (fallenTiles[fallingBlock[1] + row + 1][fallingBlock[0] + col][0] == 1
				||  fallingBlock[1] + fallingBlock[3].length >= FIELD_HEIGHT)
				{
					return false;
				}
			}
		}
	}
	return true;
}

function rotateFallingBlockClockwise()
{

}

function moveFallingBlockDown()
{
	if (canMoveFallingBlockDown())
	{
		fallingBlock[1] += 1;
		drawBlocks();
	}
	else
	{
		for (var row = 0; row < fallingBlock[3].length; row++)
		{
			for (var col = 0; col < fallingBlock[3][row].length; col++)
			{
				if (fallingBlock[3][row][col] == 1)
				{
					fallenTiles[fallingBlock[1] + row][fallingBlock[0] + col] = [1, fallingBlock[2]];
				}
			}
		}
		addNewBlock("*");
	}
}

function moveFallingBlockLeft()
{
	if (fallingBlock[0] > 0)
	{
		fallingBlock[0] -= 1;
		drawBlocks();
	}
}

function moveFallingBlockRight()
{
	if (fallingBlock[0] < FIELD_WIDTH - 1)
	{
		fallingBlock[0] += 1;
		drawBlocks();
	}
}


////////////////////////////////////////
// OTHER
////////////////////////////////////////

function pause()
{
	if (timeout)
	{
		timeout = clearTimeout(timeout);
		clearScreen();
		context.fillStyle = "black";
		context.font = "20px Arial";
		context.textAlign = "center";
		context.fillText("Pause", canvas.width / 2, canvas.height / 2);
	}
	else
	{
		timeout = setTimeout(mainloop, fallSpeed);
		drawBlocks();
	}
}

function speedUp()
{
	fallSpeed -= 50;
	console.log("fallSpeed: " + fallSpeed);
}

function slowDown()
{
	fallSpeed += 50;
	console.log("fallSpeed: " + fallSpeed);
}


////////////////////////////////////////
// DRAWING
////////////////////////////////////////

function clearScreen()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawBlocks()
{
	clearScreen();

	// draw fallenTiles
	for (var row = 0; row < fallenTiles.length; row++)
	{
		for (var col = 0; col < fallenTiles[row].length; col++)
		{
			if (fallenTiles[row][col][0] == 1)
			{
				drawTile(col * TILE_WIDTH, row * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, fallenTiles[row][col][1]);
			}
		}
	}

	// draw fallingBlock
	for (var row = 0; row < fallingBlock[3].length; row++)
	{
		for (var col = 0; col < fallingBlock[3][row].length; col++)
		{
			if (fallingBlock[3][row][col] == 1)
			{
				drawTile((fallingBlock[0] + col) * TILE_WIDTH, (fallingBlock[1] + row) * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, fallingBlock[2]);
			}
		}
	}
}

function drawTile(x, y, w, h, color)
{
	context.fillStyle = color;
	context.fillRect(x, y, w, h);
	context.strokeStyle = "white";
	context.strokeRect(x, y, w, h);
}


////////////////////////////////////////
// SETUP
////////////////////////////////////////

function setupCanvas()
{
	canvas = $i("tetrix");

	canvas.width = 500;
	canvas.height = 500;

	// doing integer division on purpose here to make the numbers even
	FIELD_WIDTH = canvas.width / TILE_WIDTH;
	FIELD_HEIGHT = canvas.height / TILE_HEIGHT;

	context = canvas.getContext("2d");
}

function setupFallenTiles()
{
	fallenTiles = [];
	for (var row = 0; row < FIELD_HEIGHT; row++)
	{
		var newRow = [];
		for (var col = 0; col < FIELD_WIDTH; col++)
		{
			newRow.push([0, ""]);
		}
		fallenTiles.push(newRow);
	}
}

document.addEventListener("keydown", function(event)
{
	key = event.which;

	switch(key)
	{
		case 37: // Left
			moveFallingBlockLeft();
			break;
		case 38: // Up
			rotateFallingBlockClockwise();
			break;
		case 39: // Right
			moveFallingBlockRight();
			break;
		case 40: // Down
			moveFallingBlockDown();
			break;
		case 43: // +
		case 61: // =
			speedUp();
			break;
		case 45: // -
			slowDown();
			break;
		case 78: // N
			addNewBlock("*");
			break;
		case 80: // P
			pause();
			break;
		case 82: // R
			setupFallenTiles();
			break;
	}
});


////////////////////////////////////////
// START
////////////////////////////////////////

function start()
{
	setupCanvas();
	setupFallenTiles();
	addNewBlock("*");
	drawBlocks();
	timeout = setTimeout(mainloop, fallSpeed);
}

function mainloop()
{
	drawBlocks();
	moveFallingBlockDown();
	timeout = setTimeout(mainloop, fallSpeed);
}
