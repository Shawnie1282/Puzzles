let canvas;
let ctx;
let puzzleDifficulty = 7;
let win = false;
let puzzleWidth = 800;
let puzzleHeight = 600;
let pieceWidth;
let pieceHeight;
let canClick = false;

function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	canvas.width = puzzleWidth;
	canvas.height = puzzleHeight;
	pieceWidth = Math.floor(puzzleWidth / puzzleDifficulty);
	pieceHeight = Math.floor(puzzleHeight / puzzleDifficulty);
	canvas.style.border = '1px solid black';
	pieces = [];
	buildPieces();
}

function buildPieces() {
	ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);
	let xPos = 0;
	let yPos = 0;
	for (let i = 0; i < (pieceWidth * puzzleDifficulty) * (pieceHeight * puzzleDifficulty); i++) {
		let piece = {};
		piece.xPos = xPos;
		piece.yPos = yPos;
		piece.rot = 0;
		pieces.push(piece);
		ctx.strokeRect(xPos, yPos, pieceWidth, pieceHeight);
		xPos += pieceWidth;
		if (xPos >= puzzleWidth) {
			xPos = 0;
			yPos += pieceHeight;
		}
	}
	document.onmousedown = onPuzzleClick;
	canClick = true;
}

function onPuzzleClick(e) {
	let mouseX = e.layerX;
	let mouseY = e.layerY;
	let x = Math.floor(mouseX / pieceWidth);
	let y = Math.floor(mouseY / pieceHeight);
	let clickedIndex = x + y * puzzleDifficulty;

	console.log(clickedIndex);

	pieces[clickedIndex].rot += Math.PI / 2;
	canClick = false;
	draw();
}

function draw() {
	if (win) return;
	ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);
	for (let i = 0; i < pieces.length; i++) {
		let piece = pieces[i];
		ctx.save();
		ctx.translate(piece.xPos + pieceWidth/2, piece.yPos + pieceHeight/2);
		ctx.rotate(piece.rot);
		ctx.strokeRect(-pieceWidth/2, -pieceHeight/2, pieceWidth, pieceHeight);
		ctx.restore();
	}
}

function drawFull() {
	ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);
	for (let i = 0; i < pieces.length; i++) {
		let piece = pieces[i];
		ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, piece.sx, piece.sy, pieceWidth, pieceHeight);
		ctx.strokeRect(piece.sx, piece.sy, pieceWidth, pieceHeight);
	}
}

//$(".show-button").mousedown(drawFull);
//$(document).mouseup(draw);