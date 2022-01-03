(function($) {
  $( window ).load(function() {
//$(function(){
//	$('#slider-info').parallaxSlider({
//		elements: [
//			{
//				SEL: 'h1'
//			},
//			{
//				SEL: 'p'
//			}
//		],
//		SEL_paging	: '#paging-main',
//		SEL_bulletR : '.ar',
//		SEL_bulletL : '.al',
//		onBefore: function(elScrollTo, elNowAt, s){			
//			elNowAt.find('.al, .ar').css({
//				'margin-left': '0',
//				'margin-right': '0',
//				'opacity': '1'
//			});
//			elScrollTo.find('.al, .ar').css({
//				'margin-left': '30px',
//				'margin-right': '30px',
//				'opacity': '0'
//			});
//			elNowAt.find('.al').animate({'margin-left' : '30px', 'opacity' : '0'});
//			elNowAt.find('.ar').animate({'margin-right' : '30px', 'opacity' : '0'});
//		},
//		onAfter: function(elScrollTo, elNowAt){
//			elScrollTo.find('.al').animate({'margin-left' : '0', 'opacity' : '1'});
//			elScrollTo.find('.ar').animate({'margin-right' : '0', 'opacity' : '1'});
//		}
//	});
//  $('.dot').first().addClass('selected'); 
//});
var mainSwiper = $('.cont').swiper({
    mode:'horizontal',
      autoplay:5000, 
    loop:true,
    calculateHeight:true,
//    slidesPerView:1,
    wrapperClass:'slider-main-wrap',
    slideClass:'slide-main',
    pagination:'.cont .paging',
    paginationClickable:true
});
 $('.al').click(function() {
    mainSwiper.swipePrev();
  });
  $('.ar').click(function() {
    mainSwiper.swipeNext();
  });
  });
})( jQuery );