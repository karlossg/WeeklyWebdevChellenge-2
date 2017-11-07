$(".nav__burger").on("click", function(){
    $(".nav").toggleClass("nav--open");
    $(".nav__menu-elem").toggleClass("nav__menu-elem--open");     
    $(".nav__burger").toggleClass("nav__burger--opened");
});
      
// smooth scrolling 
$('a[href^="#"]').on('click', function (event) {
    
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $("html, body").stop().animate({
            scrollTop: target.offset().top+50
        }, 1000);
    }
});

// menu hiding on scroll & active menu
var prev = 0;
var $window = $(window);
var nav = $(".header__wrapper");

$window.on("scroll", function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass("hidden", scrollTop > prev);
  prev = scrollTop;
  var scrollDistance = $window.scrollTop();
  $("section").each(function(i) {
    if ($(this).position().top <= scrollDistance) {
            $("ul li a").removeClass("nav__menu-link--active");
            $(".nav").removeClass("nav--open");
            $(".nav__menu-elem").removeClass("nav__menu-elem--open");
            $(".nav__burger").removeClass("nav__burger--opened");
            $("li a").eq(i).addClass("nav__menu-link--active");
            
    }
});

});