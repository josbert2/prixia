$(function() {
    //$('.firts').click();
    //$('.second').click();

    var id = $(this).attr('data-tab')
});
$('ul.tabs-primary li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs-primary li').removeClass('current');
    $('.tabs-two').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
    $('.tabs-two ul li').removeClass('fadeInUp-p');



    $('.tabs-two.current ul').find('.data-d').each(function(index) {
        $(this).animateCSS('fadeInUp-p', 100 * index);
    });


    /*$(elems).each(function(index) {
		c(index)
	    $(this).delay(1200*index).fadeIn(1000);
	});*/



    /*for (var i = 0; i < list.length; ++i) {
       list[i].classList.add('fadeInUp');
       list[i].style.animationDelay = i * 55+"ms"
    }*/

})
$('.design').click();


$('.tabs-two.current ul.tabs-ul li').click(function() {
    var tab_id = $(this).attr('data-tabCotent');


    $('.tabs-two.current ul.tabs-ul li').removeClass('current');
    $('.tabs-two.current .content-tabs').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');

    $('.content-tabs .content').find('.data-d').removeClass('fadeInUp-p');
    $('.content-tabs.current .content').find('.data-d').each(function(index) {
        $(this).animateCSS('fadeInUp-p', 100 * index);
    });


})


$('ul.tabs-ul-dev li').click(function() {

    var tab_id = $(this).attr('data-tabCotentdev');
    c(tab_id)


    $('ul.tabs-ul-dev li').removeClass('current');
    $('.tabs-two.current .content-tabs').removeClass('current');
    $(this).addClass('current');

    $("#" + tab_id).addClass('current');

    $('.content-tabs .content').find('.data-d').removeClass('fadeInUp-p');
    $('.content-tabs.current .content').find('.data-d').each(function(index) {
        $(this).animateCSS('fadeInUp-p', 100 * index);
    });
})