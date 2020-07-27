let canvas;
let ctx;

function init() {
	
}

function setCanvas() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	canvas.width = puzzleWidth;
	canvas.height = puzzleHeight;
	canvas.style.border = '1px solid black';
	pieces = [];
	ctx.drawImage(img, 0, 0, puzzleWidth, puzzleHeight, 0, 0, puzzleWidth, puzzleHeight);
	buildPieces();
}

function buildPieces() {
	let xPos = 0;
	let yPos = 0;
	for (let i = 0; i < puzzleDifficulty * puzzleDifficulty; i++) {
		let piece = {}
		piece.sx = xPos;
		piece.sy = yPos;
		pieces.push(piece);
		xPos += pieceWidth;
		if (xPos >= puzzleWidth) {
			xPos = 0;
			yPos += pieceHeight;
		}
	}
	piecesSolved = pieces;

	shufflePuzzle();
}

function shufflePuzzle() {
	pieces = fisherYatesShuffle(pieces);
	ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);
	let xPos = 0;
	let yPos = 0;
	for (let i = 0; i < pieces.length; i++) {
		let piece = pieces[i];
		piece.xPos = xPos;
		piece.yPos = yPos;
		if (piece.sx == puzzleWidth - pieceWidth && piece.sy == puzzleHeight - pieceHeight) {
			ctx.fillRect(xPos, yPos, pieceWidth, pieceHeight);
			holeIndex = i;
		}
		else {
			ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, xPos, yPos, pieceWidth, pieceHeight);
			ctx.strokeRect(xPos, yPos, pieceWidth, pieceHeight);
		}
		xPos += pieceWidth;
		if (xPos >= puzzleWidth) {
			xPos = 0;
			yPos += pieceHeight;
		}
	}
	document.onmousedown = onPuzzleClick;
	canClick = true;
}

function fisherYatesShuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}

function onPuzzleClick(e) {
	let mouseX = e.layerX;
	let mouseY = e.layerY;
	let x = Math.floor(mouseX / pieceWidth);
	let y = Math.floor(mouseY / pieceHeight);
	let clickedIndex = x + y * puzzleDifficulty;
	if (canClick && clickedIndex != holeIndex && canMove(clickedIndex)) {
		canClick = false;
		move(clickedIndex);
	}
}

function canMove(i) {
	if (i == holeIndex) return false;
	let x = pieces[i].xPos;
	let y = pieces[i].yPos;
	let holeX = pieces[holeIndex].xPos;
	let holeY = pieces[holeIndex].yPos;
	if (x == holeX - pieceWidth && y == holeY || x == holeX + pieceWidth && y == holeY || x == holeX && y == holeY - pieceHeight || x == holeX && y == holeY + pieceHeight) return true;
	return false;
}

function move(i) {
	let tempX = pieces[i].xPos;
	let tempY = pieces[i].yPos;
	pieces[i].xPos = pieces[holeIndex].xPos;
	pieces[i].yPos = pieces[holeIndex].yPos;

	let tempP = pieces[holeIndex];
	pieces[holeIndex] = pieces[i];
	pieces[i] = tempP;
	pieces[i].xPos = tempX;
	pieces[i].yPos = tempY;
	holeIndex = i;

	draw();

	win = true;
	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].xPos !== pieces[i].sx) {
			win = false;
			break;
		}
		if (pieces[i].yPos !== pieces[i].sy) {
			win = false;
			break;
		}
	}
	if (win) { drawFull(); }
	else { canClick = true; }

	//movingPiece = i;
    //reqAnimFrame(animate);
}

function animate() {
	if (pieces[holeIndex].xPos == pieces[movingPiece].xPos) {
		//pieces[holeIndex].y
	}
}

function draw() {
	if (win) return;
	ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);
	for (let i = 0; i < pieces.length; i++) {
		let piece = pieces[i];
		if (i == holeIndex) {
			ctx.fillRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);
		}
		else {
			ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, piece.xPos, piece.yPos, pieceWidth, pieceHeight);
			ctx.strokeRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);
		}
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

$(".show-button").mousedown(drawFull);
$(document).mouseup(draw);