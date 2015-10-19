// Create the canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 900;
document.body.appendChild(canvas);
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// Box image
var boxReady = false;
var boxImage = new Image();
boxImage.onload = function(){
	boxReady = true;
};
boxImage.src = "images/box.png";

// Game objects
var box = {
	speed: 256,
	x: 350,
	y: 50
};
var hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0
};

var createCircles = function () {
	window.circles = [];
	for (var i = 0; i < 4; i++) {
		var radius = 80 + i * 80;
		var speed = 5 -  i;

		window.circles.push(new Circle(radius, speed, i % 2 == 0 ? 1 : -1));	
		window.circles[i].draw();
		console.log("circle " + i + "drawn!");
	}
}
var rotateCircles = function () {
	window.circles.forEach( function (circle) {
		circle.rotate();
	});
}



// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	window.circles = null;
	createCircles();
};

// Update game objects
var update = function (modifier) {
	render();
	rotateCircles();

	if (32 in keysDown) { // Player holding space
		box.y += box.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		box.y -= box.speed * modifier;
	}

	// Are they touching?
	if (false) {
		reset();
	}
};

// Draw everything
var render = function () {
	if (boxReady) {
		context.drawImage(boxImage, box.x, box.y, 40, 40);
	}

	// Score
	context.fillStyle = "rgb(250, 250, 250)";
	context.font = "24px Helvetica";
	context.textAlign = "left";
	context.textBaseline = "top";
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();