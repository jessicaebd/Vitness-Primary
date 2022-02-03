$(document).ready(function () {
	// OTOMATIS SLIDER
	// setInterval(function () {
	// 	let currentSlide = $('.activee');
	// 	let nextSlide = currentSlide.next();
	// 	if (nextSlide.length) {
	// 		currentSlide.removeClass('activee');
	// 		nextSlide.addClass('activee');
	// 	} else {
	// 		currentSlide.removeClass('activee');
	// 		$('#first').addClass('activee');
	// 	}
	// }, 5000);

	// PANAH KANAN
	$('.next').on('click', function () {
		let currentSlide = $('.activee');
		let nextSlide = currentSlide.next();

		if (nextSlide.length) {
			currentSlide.removeClass('activee');
			nextSlide.addClass('activee');
		} else {
			currentSlide.removeClass('activee');
			$('#slide-1').addClass('activee');
		}
	});

	// PANAH KIRI
	$('.prev').on('click', function () {
		let currentSlide = $('.activee');
		let prevSlide = currentSlide.prev();

		if (prevSlide.length) {
			currentSlide.removeClass('activee');
			prevSlide.addClass('activee');
		} else {
			currentSlide.removeClass('activee');
			$('#slide-2').addClass('activee');
		}
	});

	// TITIK TITIK
	function goToSlide(n) {
		let currentSlide = $('.activee');
		currentSlide.removeClass('activee');
		$(n).addClass('activee');
	}
});
