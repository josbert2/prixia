var $el_seo, topPos_seo, newHeight_seo,
    $mainNavActive_seo = $(".tabs-ul-seo");

$mainNavActive_seo.append("<li id='magic_line_active-seo'></li>");
var $magicLineActive_seo = $("#magic_line_active-seo");

$magicLineActive_seo
    .height($(".current_page_item-seo").height())
    .css("top", 0)
    .data("origTop", $magicLineActive_seo.position().top)
    .data("origHeight", $magicLineActive_seo.height());

$(".current_page_item-seo").click(function(e) {


    $el_seo = $(this);
    topPos_seo = $el_seo.position().top;
    newHeight_seo = $el_seo.height();
    $magicLineActive_seo.stop().animate({
        top: topPos_seo,
        height: newHeight_seo
    });

});

/*     var $el_seo, topPos_seo, newHeight_seo,
   $mainNav_seo = $(".tabs-ul-seo");
   
   $mainNav_seo.append("<li id='magic_line-seo'></li>");
   var $magicLine_seo = $("#magic_line-seo");

   $magicLine_seo
       .height($(".current_page_item-seo").height())
       .css("top", 0)
       .data("origTop", $magicLine_seo.position().top)
       .data("origHeight", $magicLine_seo.height());
     

   $(".current_page_item-seo").hover(function() {
       var initList_seo = setInterval(function(){ }, 1000) ;
       $el_seo = $(this);
       topPos_seo = $el_seo.position().top;
       newHeight_seo = $el_seo.height();
       $magicLine_seo.stop().animate({
           top: topPos_seo,
           height: newHeight_seo
       }, 350);
       clearInterval(initList_seo);
     }, function() {
      initList_seo = setInterval(function(){ 
         var top_seo = $('#magic_line_active-seo').css('top');
         var height_seo = $('#magic_line_active-seo').css('height');
         $magicLine_seo.stop().animate({
           top: top_seo,
               height: height_seo

         }, 350)

       }, 1000) ;

   });*/