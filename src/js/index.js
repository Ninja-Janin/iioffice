$(document).ready(() => {
	var triggers = $('ul.triggers li');
	var images = $('.slider__photo-image');
	var lastElem = triggers.length-1;
	var slider = $('.slider__photo');
	var target;
	var lastTarget;

	setInterval(() => {
		slider.css('width', $(window).width()*(lastElem+1) +'px');
	    slider.stop(true,false).css({'left':'-'+ $(window).width()*target +'px'},300);
	}, 1500);
	triggers.first().addClass('active');

	function sliderResponse(target) {
		lastTarget = target;
	    slider.stop(true,false).animate({'left':'-'+ $(window).width()*target +'px'},300);
	    triggers.removeClass('active').eq(target).addClass('active');
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

	function sliderTiming() {
	    target = $('ul.triggers li.active').index();
	    target === lastElem ? target = 0 : target = target+1;
	    sliderResponse(target);
	}

	$('#scroll-top-btn').on('click', () => {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
});
