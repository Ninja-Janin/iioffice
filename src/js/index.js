$(document).ready(() => {
	var triggers = $('ul.triggers li'),
		images   = $('.slider__photo-image'),
		lastElem = triggers.length-1,
		slider   = $('.slider__photo'),
		target,
		lastTarget

	slider.width((100 * images.length) + '%');
	images.width((100 / images.length) + '%');
	triggers.first().addClass('active');

	function sliderResponse(target) {
		lastTarget = target;
		slider.animate({
			left: (lastTarget * -100) + '%'
		})
	    triggers.removeClass('active').eq(target).addClass('active');
	}

	function sliderTiming() {
	    target = $('ul.triggers li.active').index();
	    target === lastElem ? target = 0 : target = target+1;
	    sliderResponse(target);
	}

	triggers.click(function() {
	    if ( !$(this).hasClass('active') ) {
	        target = $(this).index();
	        sliderResponse(target);
	    }
	});

	$('#next').click(function() {
	    target = $('ul.triggers li.active').index();
	    id = parseInt($('ul.triggers li.active')[0].id.split('-')[1]);
		if (id < 3) {
			target === lastElem ? target = 0 : target = target+1;
			sliderResponse(target);
		}
	});

	$('#previous').click(function() {
	    target = $('ul.triggers li.active').index();
	    id = parseInt($('ul.triggers li.active')[0].id.split('-')[1]);
		if (id > 1) {
			lastElem = triggers.length-1;
			target === 0 ? target = lastElem : target = target-1;
			sliderResponse(target);
		}
	});

	$('#scroll-top-btn').on('click', () => {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
});
