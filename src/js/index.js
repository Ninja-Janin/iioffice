$(document).ready(() => {
	var triggers = $('ul.triggers li');
	var images = $('.slider__photo-image');
	var lastElem = triggers.length-1;
	var mask = $('.slider__photo');
	var imgWidth = images.width();
	var target;

	triggers.first().addClass('active');
	mask.css('width', imgWidth*(lastElem+1) +'px');

	function sliderResponse(target) {
	    mask.stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
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
});
