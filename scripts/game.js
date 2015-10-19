// Create the canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 900;
document.body.appendChild(canvas);
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// Game objects
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
	rotateCircles();
	// Are they touching?
	if (false) {
		reset();
	}
};

// Draw everything
var render = function () {
	
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

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