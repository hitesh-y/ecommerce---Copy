(function ($) {
 "use strict";
/*------  Products item  -- */
     $(".latest-product").owlCarousel({
      navigation : true,
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
      items : 6,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,6], 
      itemsTablet: [767,5], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
  });    
  
})(jQuery);    