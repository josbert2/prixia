'use strict';

$(".universal-link").click(function(e) {
    e.preventDefault();
    $(this).siblings('li').removeClass('active-line');
    $(this).addClass('active-line');


})

function c(l) {
    console.log(l);
}
var $this = $(this);
$("html").easeScroll();

var fixOwl = function() {
    var $stage = $('.owl-stage'),
        stageW = $stage.width(),
        $el = $('.owl-item'),
        elW = 0;
    $el.each(function() {
        elW += $(this).width() + +($(this).css("margin-right").slice(0, -2))
    });
    if (elW > stageW) {
        $stage.width(elW);
    };
}


$(function() {
    var owl = $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,

        items: 4,
        autoplay: false,
        autoplayHoverPause: true,
        margin: 20,
        responsiveClass: true,
        nav: false,
        doit: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    /*=========================================================================
       Nav init
    =========================================================================*/

    if ($(window).width() < 1299) {
        var owl = $('#links__content').owlCarousel({
            loop: false,
            autoplay: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: false,

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2,
                    dots: true
                },
                600: {
                    items: 2,
                    dots: true
                },
                890: {
                    items: 3
                },
                1000: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1300: {
                    items: 5,


                }
            }
        })
    }
    /* animate filter */
    var owlAnimateFilter = function(even) {
        $(this)
            .addClass('__loading')
            .delay(70 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('__loading')
            })
    }

    $('.btn-filter').click(function(e) {
        var filter_data = $(this).data('filter');

        /* return if current */

        $(this).siblings().removeClass('btn-active');
        $(this).addClass('btn-active');
        /** if($(this).hasClass('btn-active')) return;


         $(this).addClass('btn-active').siblings().removeClass('btn-active');*/

        /* Filter */
        owl.owlFilter(filter_data, function(_owl) {
            $(_owl).find('.item').each(owlAnimateFilter);
        });
    })
})


/*=========================================================================
   Menu mobile
=========================================================================*/
$('.nav-mobile').click(function() {
    $(this).toggleClass('open')
})