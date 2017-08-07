$('.carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  draggable: false,
  pauseOnFocus: false,
  pauseonHover: false,
});

var timeScroll = 0

var userScroll = $(timeScroll).scrollTop();

if (userScroll - timeScroll > 50){
  var navHeight = $('.navbar').css('height');
}

$(".navbar").animate({top: '-' + navHeight}, 150);
timeScroll=userScroll
