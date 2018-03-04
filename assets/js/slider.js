$(document).ready(() => {
	var slideIndex = 1;
	showSlides(slideIndex);

    $('.slider__btn-trigger').on('click', function() {
        let slider_btn_event = $(this);
        let id = slider_btn_event.attr('id');

		if(id == 'previous'){
			id = -1;
		}else{
			id = 1;
		}
		plusSlides(id)
    });

    $('.slider__current-slide').on('click', function() {
        let slider_current_slide = $(this);
        let active_slide = slider_current_slide.attr('id').split('-');
		currentSlide(active_slide[1])
    });

	function plusSlides(n) {
		console.log("plusSlides:" + n)
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		console.log("current:" + n)
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var dots   = document.getElementsByClassName("slider__current-slide");
		var slides = document.getElementsByClassName("slider__photo--hide");

		if (n > slides.length) {
			slideIndex = 1
		}    

		if (n < 1) {
			slideIndex = slides.length
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		
		console.log(slideIndex -1)
		console.log(slides)

		slides[slideIndex - 1].style.display = "block";  
		dots[slideIndex - 1].className += " active";
	}
});

