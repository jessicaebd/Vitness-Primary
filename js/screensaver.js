var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0;
let y = 0;
let movex = 2;
let movey = 2;
let size = 300;
let logo;

logo = new Image();
logo.src = './assets/logo.png';
logo.onload = function () {
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
	ctx.drawImage(logo, x, y, size, size);
}

function screensaver() {
	$('canvas').show();
	document.body.style.overflow = 'hidden';
}

let counter;

let hideScreen = function (e) {
	$('canvas').hide();
	document.body.style.overflow = 'auto';
	this.clearTimeout(counter);
	counter = setTimeout(screensaver, 10000);
};

window.addEventListener('mousemove', hideScreen);
window.addEventListener('click', hideScreen);
