let toggle = document.getElementById('hamburger');
let menu = document.getElementById('miniNavbar');
let body = document.body;
toggle.onclick = function () {
	// prevent null read
	if (menu.style.display === '') {
		menu.style.display = 'none';
	}
	// check condition
	if (menu.style.display === 'none') {
		menu.style.display = 'block';
		body.style.overflow = 'hidden';
	} else {
		menu.style.display = 'none';
		body.style.overflow = 'auto';
	}
};
