//(function($) {
////$(function(){
////	$('#slider-domain').parallaxSlider({
////		SEL_paging	: '#mbl-paging-domain',
////		speed_cont: 800,
////		count_in_margins: true
////	});
////  profits
////});
//  mySwiper = '';
//  domSwiper = '';
//  planSwiper = '';
//  mobile = false;
//  if (navigator.userAgent.match(/Android/i)
//          || navigator.userAgent.match(/webOS/i)
//          || navigator.userAgent.match(/iPhone/i)
//          || navigator.userAgent.match(/iPad/i)
//          || navigator.userAgent.match(/iPod/i)
//          || navigator.userAgent.match(/BlackBerry/i)
//          || navigator.userAgent.match(/Windows Phone/i)
//          || ($(window).width() < 720)
//          ) {
//    createSwiper();
//    mobile = true;
//  }
////  $(window).resize(function() {
////    if ($(window).width() < 720) {
////      if (!mobile) {
////        mobile = true;
////        if (mySwiper == '') {
////          createSwiper();
////        }
////      }
////    }
////    else if (mobile) {
////      mobile = false;
////      if (mySwiper != '') {
////        mySwiper.destroy();
////        mySwiper = '';
////      }
////      if (domSwiper != '') {
////        domSwiper.destroy();
////        domSwiper = '';
////      }
////      if (planSwiper != '') {
////        planSwiper.destroy();
////        planSwiper = '';
////      }
////      $(".profits-plans-cont").attr("style", "");
////      $(".profits-block").attr("style", "");
////      $(".profits-domain-cont").attr("style", "");
////      $(".profits-block").attr("style", "");
////      $(".mbl-packs-cont").attr("style", "");
////      $(".pack").attr("style", "");
////    }
////  });
//  function createSwiper() {
//    mySwiper = $('.profits-plans').swiper({
//      mode: 'horizontal',
//      loop: false,
//      calculateHeight: true,
//      wrapperClass: 'profits-plans-cont',
//      slideClass: 'profits-block',
//      pagination: '.profits-plans .paging',
//      paginationClickable: true,
//      resizeReInit: false
//    });
//    domSwiper = $('.profits-domain').swiper({
//      mode: 'horizontal',
//      loop: false,
//      calculateHeight: true,
//      wrapperClass: 'profits-domain-cont',
//      slideClass: 'profits-block',
//      pagination: '.profits-domain .paging',
//      paginationClickable: true,
//      resizeReInit: false
//    });
//    planSwiper = $('.packs-cont').swiper({
//      mode: 'horizontal',
//      loop: false,
//      calculateHeight: true,
//      wrapperClass: 'mbl-packs-cont',
//      slideClass: 'pack',
//      resizeReInit: false
//    });
//  }
//})(jQuery);
//
