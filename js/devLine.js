var $el_dev, topPos_dev, newHeight_dev,
    $mainNavActive_dev = $(".tabs-ul-dev");

$mainNavActive_dev.append("<li id='magic_line_active-dev'></li>");
var $magicLineActive_dev = $("#magic_line_active-dev");

$magicLineActive_dev
    .height($(".current_page_item-dev").height())
    .css("top", 0)
    .data("origTop", $magicLineActive_dev.position().top)
    .data("origHeight", $magicLineActive_dev.height());

$(".current_page_item-dev").click(function(e) {


    $el_dev = $(this);
    topPos_dev = $el_dev.position().top;
    newHeight_dev = $el_dev.height();
    $magicLineActive_dev.stop().animate({
        top: topPos_dev,
        height: newHeight_dev
    });

});


/* var $el_dev, topPos_dev, newHeight_dev,
      $mainNav_dev = $(".tabs-ul-dev");
      
      $mainNav_dev.append("<li id='magic_line-dev'></li>");
      var $magicLine_dev = $("#magic_line-dev");

      $magicLine_dev
          .height($(".current_page_item-dev").height())
          .css("top", 0)
          .data("origTop", $magicLine_dev.position().top)
          .data("origHeight", $magicLine_dev.height());

 $(".current_page_item-dev").hover(function() {
           var initList_dev = setInterval(function(){ }, 1000) ;
          $el_dev = $(this);
          topPos_dev = $el_dev.position().top;
          newHeight_dev = $el_dev.height();
          $magicLine_dev.stop().animate({
              top: topPos_dev,
              height: newHeight_dev
          }, 350);
          clearInterval(initList_dev);
        }, function() {
         initList_dev = setInterval(function(){ 
            var top_dev = $('#magic_line_active-dev').css('top');
            var height_dev = $('#magic_line_active-dev').css('height');
            $magicLine_dev.stop().animate({
              top: top_dev,
                  height: height_dev

            }, 350)

          }, 1000) ;

      });*/