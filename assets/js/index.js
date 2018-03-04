$(document).ready(() => {
	let slider_element = $('#photo-slider'),
		active_index   = 1,
		image_width    = 33.333,
		default_slide  = '#indicator-' +active_index,
		self           = this,
		multiplier;

    $(default_slide).attr('src', 'assets/images/hover-indicator.png');
    $('#previous').hide();
      
    $('.slider__btn-trigger').on('click', function() {
        let slider_btn_event = $(this);
        let id = slider_btn_event.attr('id');
		self.image_preview(slider_btn_event, id);
    });

    $('#scroll-top-btn').on('click', () => {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

	self.image_preview = (slider_btn_event, id) => {
        if (slider_element.is(':not(:animated)')) {
            if(id.split('-')[0] == 'previous' && active_index == 1) {
                return false;
            }
            if(id.split('-')[0] == 'next' && active_index == 3) {
                return false;
            }
            if(id.split('-')[1] == active_index) {
                return false;
            }

			self.slider_transition(id, active_index);
			self.slider_animation(active_index);
        }
	}

	self.slider_transition = (id) => {
		if (id == 'previous') {
			multiplier = -3;
			active_index -= 1;
		}
		else if(id == 'next'){
			multiplier = 3;
			active_index += 1;
		}
		else if(id == 'indicator-2'){
			multiplier = (active_index == 3) ? -3 : 3;
			active_index = 2;
		}
		else if(id == 'indicator-3'){
			multiplier = (active_index == 1) ? 6 : 3;
			active_index = 3;
		}
		else{
			multiplier = (active_index == 2) ? -3 : -6;
			active_index = 1;
		}
	}

	self.slider_animation = () =>{
		slider_element.animate({ left: '+=' + (-image_width * multiplier + '%') },() => {
			$('#indicator-' + active_index).attr('src', 'assets/images/hover-indicator.png');
			$('.slider__btn-indicator').not('#indicator-' + active_index).attr('src', 'assets/images/slide-indicator.png');
			if(active_index == 1) {
				$('#previous').hide();
				$('#next').show();
			}
			else if(active_index == 3) {
				$('#previous').show();
				$('#next').hide();
			}
			else {
				$('#previous').show();
				$('#next').show();
			}
		});   
	}
});
