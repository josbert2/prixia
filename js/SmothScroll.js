$('.nav-link li').on('click', function(e) {
    e.preventDefault();

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;


    $('body,html').animate({
        scrollTop: scrollPoint,
    }, 500, function() {
        $('.nav').removeClass('is-hidden');
    });
    return false;

})

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();


    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();