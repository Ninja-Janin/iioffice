$(document).ready(() => {

	let gallery    = $('#gallery')
	let curr_index = 1
	let pic_width  = 33.333; 

    $('#pager-' + curr_index).attr('src', 'assets/images/hover-indicator.png');
    $('#previous').hide();
      
    $('.slider__btn-trigger').on('click', function() {
        let btn = $(this);
        let btn_id = btn.attr('id');
        if (gallery.is(':not(:animated)')) {
            if(btn_id.split('-')[0] == 'previous' && curr_index == 1) {
                return false;
            }
            if(btn_id.split('-')[0] == 'next' && curr_index == 3) {
                return false;
            }
            if(btn_id.split('-')[1] == curr_index) {
                return false;
            }

            let multiplier;       

			if (btn_id == 'previous') {
				multiplier = -3;
				curr_index -= 1;
			}
			else if(btn_id == 'next'){
				multiplier = 3;
				curr_index += 1;
			}
			else if(btn_id == 'pager-2'){
				multiplier = (curr_index == 3) ? -3 : 3;
				curr_index = 2;
			}
			else if(btn_id == 'pager-3'){
				multiplier = (curr_index == 1) ? 6 : 3;
				curr_index = 3;
			}
			else{
				multiplier = (curr_index == 2) ? -3 : -6;
				curr_index = 1;
			}

            gallery.animate({ left: '+=' + (-pic_width * multiplier + '%') },() => {
                $('#pager-' + curr_index).attr('src', 'assets/images/hover-indicator.png');
                $('.slider__btn-indicator').not('#pager-' + curr_index).attr('src', 'assets/images/slide-indicator.png');
                if(curr_index == 1) {
                    $('#previous').hide();
                    $('#next').show();
                }
                else if(curr_index == 3) {
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

    $('#btn-pagetop').on('click', () => {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});
