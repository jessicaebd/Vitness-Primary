let toggle = document.getElementById('hamburger');
let menu = document.getElementById('miniNavbar');
toggle.onclick = function () {
	if (menu.style.display === 'none') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
};
