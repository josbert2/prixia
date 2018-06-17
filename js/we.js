// add class a href
const links = document.getElementById('links__content');
const link = links.getElementsByTagName('li');



for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(event) {
        event.preventDefault();

        var current = document.getElementsByClassName('active-links');
        current[0].className = current[0].className.replace(' active-links', '');
        this.className += " active-links";


    })
}





var $el, topPos, newHeight,
    $mainNavActive = $(".tabs-ul");

$mainNavActive.append("<li id='magic_line_active'></li>");
var $magicLineActive = $("#magic_line_active");

$magicLineActive
    .height($(".current_page_item").height())
    .css("top", 0) // $(".current_page_item").position().top
    .data("origTop", $magicLineActive.position().top)
    .data("origHeight", $magicLineActive.height());

$(".current_page_item").click(function(e) {

    $el = $(this);
    topPos = $el.position().top;
    newHeight = $el.height();
    $magicLineActive.stop().animate({
        top: topPos,
        height: newHeight
    });

});

/*   var $el, topPos, newHeight,
   $mainNav = $(".tabs-ul");
   
   $mainNav.append("<li id='magic_line'></li>");
   var $magicLine = $("#magic_line");

   $magicLine
       .height($(".current_page_item").height())
       .css("top", 0)
       .data("origTop", $magicLine.position().top)
       .data("origHeight", $magicLine.height());
   
     $(".current_page_item").hover(function() {
       $el = $(this);
       topPos = $el.position().top;
       newHeight = $el.height();
       $magicLine.stop().animate({
           top: topPos,
           height: newHeight
       }, 350);
     }, function() {
     var top = $('#magic_line_active').css('top');
     var height = $('#magic_line_active').css('height');
     $magicLine.stop().animate({
       top: top,
           height: height

     }, 350)
       /*$magicLine.stop().animate({
           top: $magicLine.data("origTop"),
           height: $magicLine.data("origHeight")
       });    

   });

   /*, function() {
     $magicLine.stop().animate({
         top: $magicLine.data("origTop"),
         height: $magicLine.data("origHeight")
     });    
 });*/