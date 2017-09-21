/*
 *  File name: Scritps.js
 *  All main scripts are here
 */


;(function($) {
  'use strict';


  /*
   * Loader scripts
   */

    if ($('.an-loader').length > 0 ) {
      $(window).on('load', function() {
        $(".an-loader").fadeOut("slow");
      });
    }

  /*
   * Slectize plugin call
   * customize basic select box
   */

  if ($('.an-default-select-wrapper').length > 0) {
    $('.an-default-select-wrapper select').selectize();
  }





  /*
   * owl carouse initialize
   * for premium listing slider
   */

  if ($('.default-slider').length > 0) {
    $('.default-slider').owlCarousel({
      items: 5,
      autoplay: true,
      loop: true,
      navigation: true,
      margin: 20,
      navText: ['&#xf2ca', '&#xf30f'],
      pagination: true,
      responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
        }
    }
    });
  }


  if ($('.listing-slider').length > 0) {
    $('.listing-slider').owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      navigation: true,
      navText: ['&#xf2ca', '&#xf30f'],
      pagination: true,
    });
  }



  /*
   * home slider
   */
  if ($('.home-slider').length > 0) {
    $('.home-slider').owlCarousel({
      items: 1,
      autoplay:true,
      loop: true,
      nav: true,
      pagination: true,
      navText: ['&#xf2ca', '&#xf30f'],
    });
  }


  /*
   * owl carouse initialize
   * for testimonial
   */

  if ($('.testimonial-slider').length > 0) {
    $('.testimonial-slider').owlCarousel({
      items: 1,
      autoplay:true,
      loop: true,
      navigation: false,
      pagination: true,
    });
  }




  /*
   * Listing page height
   * based on window size
   * */

  var headerHeight = $('.an-header').height();
  var windowHeight = $(window).height();
  var listingBodyheight = windowHeight - headerHeight;

  if($('.listing-body').length > 0) {
    $('.an-header-banner.listing-body').css({height:  listingBodyheight + 'px'});
  }


  // Listing search field expand

  if($('.an-search-show-more').length > 0) {

    $('.show-more-btn a').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');

      $('.an-search-show-more .show-content').toggleClass('active');

    })
  }



  /*
   * Scroll based class on header
   */
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 90) {
      $(".an-header").addClass("sticky");
    } else {
      $(".an-header").removeClass("sticky");
    }
  });

  /*
   * Location masonry grid
   * Call here used isotpo.packg.min.js
   */

  /* if ($('.masonry').length > 0) {
   *   var $container = jQuery('.masonry');
   *   $container.masonry({
   *     columnWidth: '.an-location-single',
   *     itemSelector: '.an-location-single',
   *     percentPosition: true
   *   });
   * } */


  // slider call
  //
  if (('#slider').length > 0) {
    function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var w1 = 40;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var w2 = 40;
      var r2 = x2 + w2;

      if (r1 < x2 || x1 > r2) return false;
      return true;
    }

    $('#slider').slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function(event, ui) {

        $('#slider .ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[ 0 ]);
        $('#slider .ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[ 1 ]);
        $('#slider .price-range-both').html('<i>$' + ui.values[ 0 ] + ' - </i>$' + ui.values[ 1 ] );

        //

        if ( ui.values[0] === ui.values[1] ) {
          $('.price-range-both i').css('display', 'none');
        } else {
          $('.price-range-both i').css('display', 'inline');
        }

        //

        if (collision($('.price-range-min'), $('.price-range-max')) === true) {
          $('.price-range-min, .price-range-max').css('opacity', '0');
          $('.price-range-both').css('display', 'block');
        } else {
          $('.price-range-min, .price-range-max').css('opacity', '1');
          $('.price-range-both').css('display', 'none');
        }

      }
    });

    $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider').slider('values', 0 ) + ' - </i>' + $('#slider').slider('values', 1 ) + '</span>');

    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider').slider('values', 0 ) + '</span> <span class="slider-title">Min</span>');

    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider').slider('values', 1 ) + '</span> <span class="slider-title">Max</span>');
  };


  if ($('#slider-radius').length > 0) {
    $('#slider-radius').slider({
      range: 'min',
      min: 0,
      max: 500,
      value: 300,
      slide: function(event, ui) {
        $('#slider-radius .ui-slider-handle .radius-range').html(ui.value + ' ' + 'Km');
      }
    });


    $('#slider-radius .ui-slider-handle').append('<span class="radius-range value">' + $('#slider-radius').slider('values', 0 ) + ' ' + 'Km</span> <span class="slider-title">Radius</span>');
  };


  /*
   * Range slider alter
   */
  if ($('#slider-radius-alter').length > 0) {
    $( '#slider-radius-alter' ).slider({
      range: "min",
      value: 60,
      min: 1,
      max: 150,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-radius-alter" ).slider( "value" ) );
  }


  /*
   * Price Range slider alter
   */
  if ($('#slider-price-alter').length > 0) {
    $( "#slider-price-alter" ).slider({
      range: true,
      min: 0,
      max: 5000,
      values: [ 1000, 3500 ],
      slide: function( event, ui ) {
        $( "#amount1" ).val( "$" + ui.values[ 0 ]);
        $( "#amount2").val("$" + ui.values[1]);
      }
    });
    $( "#amount1" ).val( "$" + $( "#slider-price-alter" ).slider( "values", 0 ));
    $( "#amount2" ).val( "$" + $( "#slider-price-alter" ).slider( "values", 1 ));
  }

  /*
   * Year Range slider alter
   */
  if ($('#slider-year-range').length > 0) {
    $( "#slider-year-range" ).slider({
      range: true,
      min: 1998,
      max: 2017,
      values: [ 2002, 2012 ],
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.values[ 0 ]);
        $( "#amount4").val( ui.values[1]);
      }
    });
    $( "#amount3" ).val( $( "#slider-year-range" ).slider( "values", 0 ));
    $( "#amount4" ).val( $( "#slider-year-range" ).slider( "values", 1 ));
  }


  /*
   * Year Range slider alter
   */
  if ($('#slider-mileage-range').length > 0) {
    $( "#slider-mileage-range" ).slider({
      range: true,
      min: 500,
      max: 40000,
      values: [ 5000, 20000 ],
      slide: function( event, ui ) {
        $( "#amount5" ).val( ui.values[ 0 ]);
        $( "#amount6").val( ui.values[1]);
      }
    });
    $( "#amount5" ).val( $( "#slider-mileage-range" ).slider( "values", 0 ));
    $( "#amount6" ).val( $( "#slider-mileage-range" ).slider( "values", 1 ));
  }



  if ($('#input-id').length > 0 ) {
    $("#input-id").fileinput();
  }

  if ($('#input-id-two').length > 0 ) {
    $("#input-id-two").fileinput();
  }

})(jQuery);


