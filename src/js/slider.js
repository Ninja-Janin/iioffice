$(document).ready(() => {
	let active_slide = 2,
		self         = this;

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
		self.currentSlide(active_slide[1])
    });

	self.plusSlides = (n) => {
		self.showSlides(active_slide += parseInt(n))
	}

	self.currentSlide = (n) => {
		self.showSlides(active_slide = parseInt(n));
	}

	self.showSlides = (n) => {
		let i;
		let slides = document.getElementsByClassName("slider__photo--hide");
		let dots   = document.getElementsByClassName("slider__current-slide");

		if (n > slides.length) {
			active_slide = 1
		}    

		if (n < 1) {
			active_slide = slides.length
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		
		slides[active_slide - 1].style.display = "block";  
		dots[active_slide - 1].className += " active";
	}

	self.showSlides(active_slide);

	$('#scroll-top-btn').on('click', () => {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

});
