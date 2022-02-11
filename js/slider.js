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

	// $('.next').on('click', function () {
	// 	let currentSlide = $('.activee');
	// 	let nextSlide = currentSlide.next();

	// 	if (nextSlide.length) {
	// 		currentSlide.removeClass('activee');
	// 		nextSlide.addClass('activee');
	// 	} else {
	// 		currentSlide.removeClass('activee');
	// 		$('#slide-1').addClass('activee');
	// 	}
	// });

	// // PANAH KIRI
	// $('.prev').on('click', function () {
	// 	let currentSlide = $('.activee');
	// 	let prevSlide = currentSlide.prev();

	// 	if (prevSlide.length) {
	// 		currentSlide.removeClass('activee');
	// 		prevSlide.addClass('activee');
	// 	} else {
	// 		currentSlide.removeClass('activee');
	// 		$('#slide-2').addClass('activee');
	// 	}
	// });

	let slides = $('.slides');
	let dot = $('.dot');
	let slideCount = 3;
	let currentSlide = 0;

	slides.hide();
	slides.eq(currentSlide).show();

	dot.eq(currentSlide).addClass('dot-active');

	// Slide Otomatis
	setInterval(() => {
		slides.eq(currentSlide).hide();
		dot.eq(currentSlide).removeClass('dot-active');
		if (currentSlide < slideCount - 1) {
			currentSlide++;
		} else {
			currentSlide = 0;
		}
		slides.eq(currentSlide).show();
		dot.eq(currentSlide).addClass('dot-active');
	}, 5000);

	// Kontrol Slide
	$('#leftBtn').click(function () {
		slides.eq(currentSlide).hide();
		dot.eq(currentSlide).removeClass('dot-active');
		if (currentSlide > 0) {
			currentSlide--;
		} else {
			currentSlide = slideCount - 1;
		}
		slides.eq(currentSlide).show();
		dot.eq(currentSlide).addClass('dot-active');
	});

	$('#rightBtn').click(function () {
		slides.eq(currentSlide).hide();
		dot.eq(currentSlide).removeClass('dot-active');
		if (currentSlide < slideCount - 1) {
			currentSlide++;
		} else {
			currentSlide = 0;
		}
		slides.eq(currentSlide).show();
		dot.eq(currentSlide).addClass('dot-active');
	});
});
