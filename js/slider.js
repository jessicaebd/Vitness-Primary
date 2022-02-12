$(document).ready(function () {
	let slides = $('.slides');
	let slideCount = 4;
	let currentSlide = 0;
	let dot = $('.dot');

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
