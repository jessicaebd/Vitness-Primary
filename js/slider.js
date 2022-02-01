$(document).ready(function () {
	$('.next').on('click', function () {
		let currentSlide = $('.activee');
		let nextSlide = currentSlide.next();

		if (nextSlide.length) {
			currentSlide.removeClass('activee');
			nextSlide.addClass('activee');
		} else {
			currentSlide.removeClass('activee');
			$('#first').addClass('activee');
		}
	});

	$('.prev').on('click', function () {
		let currentSlide = $('.activee');
		let prevSlide = currentSlide.prev();

		if (prevSlide.length) {
			currentSlide.removeClass('activee');
			prevSlide.addClass('activee');
		} else {
			currentSlide.removeClass('activee');
			$('#last').addClass('activee');
		}
	});
});
