$(document).ready(() => {
	let active_slide = 2,
		slide_direction;
		self         = this;

    $('.slider__btn-trigger').on('click', function() {
        let slider_btn_event = $(this);
        let id = slider_btn_event.attr('id');

		if(id == 'previous'){
			id = -1;
			slide_direction = ' slider__photo--left';
		}else{
			id = 1;
			slide_direction = ' slider__photo--right';
		}

		plusSlides(id)
    });

    $('.slider__current-slide').on('click', function() {
        let slider_current_slide = $(this);
        let active_slide = slider_current_slide.attr('id').split('-');
		self.currentSlide(active_slide[1])
    });

	self.plusSlides = (n) => {
		let active = $('.slider__photo--hide');
		$.each(active, function(index, value){
			if(value.style.display == 'block'){
				active[index].className += slide_direction;
			}
		})
		setTimeout(function(){
			self.showSlides(active_slide += parseInt(n))
		}, 500)
	}

	self.currentSlide = (n) => {
		self.showSlides(active_slide = parseInt(n));
	}

	self.showSlides = (n) => {
		let i;
		let slides           = document.getElementsByClassName('slider__photo--hide');
		let slider_indicator = document.getElementsByClassName('slider__current-slide');

		if (n > slides.length) {
			active_slide = 1
		}    

		if (n < 1) {
			active_slide = slides.length
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';  
		}

		for (i = 0; i < slider_indicator.length; i++) {
			slider_indicator[i].className = slider_indicator[i].className.replace(' active', '');
		}
		
		for (var x = 0; x < slides.length; x++) {
			slides[x].className = slides[x].className.replace(' slider__photo--left', '');
			slides[x].className = slides[x].className.replace(' slider__photo--right', '');
		}
		slides[active_slide - 1].style.display = 'block';  
		slides[active_slide - 1].className += ' slider__photo--fade';  
		slider_indicator[active_slide - 1].className += ' active';
	}

	self.showSlides(active_slide);

	$('#scroll-top-btn').on('click', () => {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

});
