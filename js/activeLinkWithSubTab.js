/*$(document).ready(function(){
$('#links__content li').click(function(){
	$(this).each(function(){
		 var i = $(this).index();
		  $('.linkA-'+i).trigger('click');
		
	})
});
  });*/
$(document).ready(function() {
    $('.linkA-1').first().addClass('current');
    $('.content-tabs.linkA-1 .content ').find('.data-d').each(function(index) {
        $(this).animateCSS('fadeInUp-p', 100 * index);
    });

    $('#links__content li').click(function() {
        /*$('.linkA-1').removeClass('current');
        $('.linkA-2').removeClass('current');
        $('.linkA-3').removeClass('current');
        $('.linkA-4').removeClass('current');
        $('.linkA-5').removeClass('current');
        $('.linkA-6').removeClass('current');*/
        //$('#magic_line_active').css('top', '0');
        $(this).each(function() {

            var i = $(this).index() + 1;
            /*$('.linkA-'+i).removeClass('current')*/
            ;
            /*$('.linkA-'+i).addClass('current');*/
            /*c($('.linkA-'+i))
		 $('.content-tabs .content').find('.data-d').removeClass('fadeInUp-p');
		 */



        })
    });
});