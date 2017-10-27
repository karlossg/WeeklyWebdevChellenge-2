// active menu tab
$('ul li a').click(function(){
    $('li a').removeClass("nav__menu-link--active");
    $(this).addClass("nav__menu-link--active");
});

// smooth scrolling 
$('a[href^="#"]').on('click', function (event) {
    
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// menu hiding on scroll
var prev = 0;
var $window = $(window);
var nav = $('.header__wrapper');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});