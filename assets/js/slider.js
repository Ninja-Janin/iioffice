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

	function plusSlides(n) {
		showSlides(slideIndex += -1);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n = 2) {
		var i;
		var slides = document.getElementsByClassName("slider__photo--hide");
		// var dots = document.getElementsByClassName("dot");

		if (n > slides.length) {
			slideIndex = 1
		}    

		if (n < 1) {
			slideIndex = slides.length
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}

		// for (i = 0; i < dots.length; i++) {
		// 	dots[i].className = dots[i].className.replace(" active", "");
		// }

		slides[slideIndex-1].style.display = "block";  
		// dots[slideIndex-1].className += " active";
	}
});
