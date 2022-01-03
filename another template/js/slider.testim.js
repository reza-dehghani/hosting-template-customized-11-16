
//(function($) {
////$(function(){
////	$('#slider-features').parallaxSlider({
////		SEL_paging	: '#mbl-paging-features',
////		speed_cont: 800,
////		
////		onBefore: function(elScrollTo, elNowAt){
//////			$('.blog-block.masked').first().animate({'margin-left' : '30px', 'opacity' : '0'});
//////			$('.blog-block.masked').last().animate({'margin-left' : '-30px', 'opacity' : '0'});
////		},
////		onAfter: function(elScrollTo, elNowAt){
//////			$('.blog-block.masked').first().animate({'margin-left' : '0', 'opacity' : '.2'});
//////			$('.blog-block.masked').last().animate({'margin-left' : '0', 'opacity' : '.2'});
////		}
////	});
//
////});
//})( jQuery );


(function($) {
  mySwiper = '';
  featSwiper = '';
  profitSwiper = '';
  domSwiper = '';
  planSwiper = '';
//  map = $("#map_canvas").gmap("get", "map");
//  currCenter = map.getCenter();
  $(function() {
    if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            || ($(window).width() < 720)
            ) {
      createSwiper();
    }
  });
  $(window).resize(function() {
//    google.maps.event.trigger(map, 'resize');
//    map.setCenter(currCenter);
//    alert(currCenter);
    if ($(window).width() < 720) {
      $(".icons").each(function() {
        $(this).removeAttr("style");
      });
      if (mySwiper == '') {
        createSwiper();
      }
    }
    else {
      if (mySwiper != '') {
        destroySwipers();
      }
    }
  });
  function createSwiper() {
    mySwiper = $('.testim-cont-general').swiper({
      mode: 'horizontal',
      loop: false,
      calculateHeight: true,
      wrapperClass: 'testim-cont',
      slideClass: 'testim-block',
      pagination: '.testim-cont-general .paging',
      paginationClickable: true,
      resizeReInit: false
    });
    createFeatSwiper();
  }
  function createFeatSwiper() {
    featSwiper = $('.features-cont').swiper({
      mode: 'horizontal',
      loop: false,
      calculateHeight: true,
      wrapperClass: 'features-cont-sub',
      slideClass: 'features-as',
      pagination: '.features-cont .paging',
      paginationClickable: true,
      resizeReInit: false
    });
    createProfitSwiper()
  }
  function createProfitSwiper() {
    profitSwiper = $('.profits-plans').swiper({
      mode: 'horizontal',
      loop: false,
      calculateHeight: true,
      wrapperClass: 'profits-plans-cont',
      slideClass: 'profits-block',
      pagination: '.profits-plans .paging',
      paginationClickable: true,
      resizeReInit: false
    });
    createDomSwiper();
  }
  function createDomSwiper() {
    domSwiper = $('.profits-domain').swiper({
      mode: 'horizontal',
      loop: false,
      calculateHeight: true,
      wrapperClass: 'profits-domain-cont',
      slideClass: 'profits-block',
      pagination: '.profits-domain .paging',
      paginationClickable: true,
      resizeReInit: false
    });
    createPlanSwiper();
  }
  function createPlanSwiper() {
    planSwiper = $('.packs-cont').swiper({
      mode: 'horizontal',
      loop: false,
      calculateHeight: true,
      wrapperClass: 'mbl-packs-cont',
      slideClass: 'pack',
      resizeReInit: false
    });
  }

  function destroySwipers() {
    mySwiper.destroy();
    mySwiper = '';
    $(".testim-cont").removeAttr("style");
    $(".testim-block").removeAttr("style");
    featSwiper.destroy();
    featSwiper = '';
    $(".features-cont-sub").removeAttr("style");
    $(".features-as").removeAttr("style");
    profitSwiper.destroy();
    profitSwiper = '';
    domSwiper.destroy();
    domSwiper = '';
    planSwiper.destroy();
    planSwiper = '';
    $(".profits-plans-cont").removeAttr("style");
    $(".profits-block").removeAttr("style");
    $(".profits-domain-cont").removeAttr("style");
    $(".profits-block").removeAttr("style");
    $(".mbl-packs-cont").removeAttr("style");
    $(".pack").removeAttr("style");
  }
})(jQuery);










