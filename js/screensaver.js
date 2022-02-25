var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
let x = 0;
let y = 0;
let movex = 2;
let movey = 2;
let size = 300;

// Make img
base_image = new Image();
base_image.src = './assets/logo.png';
base_image.onload = function () {
	ctx.imageSmoothingEnabled = false;
	setInterval(animate, 10);
};

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (x < 0 || x > canvas.width - size) {
		movex = -movex;
	}
	if (y < 0 || y > canvas.height - size) {
		movey = -movey;
	}
	x += movex;
	y += movey;
	ctx.drawImage(base_image, x, y, size, size);
}

// Logic screen saver
function screensaver() {
	$('canvas').show();
	document.body.style.overflow = 'hidden';
}

let counter;

window.addEventListener('mousemove', function (e) {
	$('canvas').hide();
	this.clearTimeout(counter);
	myTimeout = setTimeout(screensaver, 3000);
});
