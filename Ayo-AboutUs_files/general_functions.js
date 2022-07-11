(function() {
  'use strict';
  // miles chevron flipper
  $(document).on('click', '.cp_distance_div_filter, .cp_distance_div_filter_item', function() {
    $('.cp_distance_div_filter').toggleClass('cp_distance_div_filter_open');
  });
  // category chevron flipper
  $(document).on('click', '.cp_cat_menu_div_filter, .cp_cat_menu_div_filter_item', function() {
    $('.cp_cat_menu_div_filter').toggleClass('cp_cat_menu_div_filter_open')
  });

  $(document).on('click', '.accord-header', function() {
    $( ".accord-content" ).slideToggle( "slow" );
    // $(this).text($(this).text() == 'Show Options & Filters' ? 'Hide Options & Filters' : 'Show Options & Filters');
    return false;
  });

  $(document).on('click', '.accord-header', function() {
     $(".accord-header").toggleClass("filter_icon"); 
  });

  // namespace
  var destini = {};
  // -----------------------------------------------------------
  // Function for showing email dropdown based on which panel
  // -----------------------------------------------------------
  destini.emailToggle = function() {
    if ($('#panel3').is(':visible')) {
      destini.$emailDiv = $(".p3_bottom_email");
      destini.heightOfControls = $('#p3Controls').height();;
      destini.distanceFromTop = destini.heightOfControls;
    } else {
      destini.$emailDiv = $(".bottom_email");
      destini.heightOfControls = $('#p2Controls').height();;
      if (screen.width < 768) {
        destini.distanceFromTop = 39;
      } else {
        destini.distanceFromTop = $($('.stores_products_holder')[1]).outerHeight() + destini.heightOfControls;
      }
    }
    if (destini.$emailDiv.is(":visible")) {
      // if email div is visible, hide it
      destini.$emailDiv.animate({
        'top': destini.distanceFromTop - destini.heightOfControls,
        'opacity': 0
      }, {
        duration: 100,
        queue: false,
        complete: function() {
          destini.$emailDiv.hide(200);
        }
      });
    } else {
      // if email div is invisible, show it
      destini.$emailDiv.css({
        'display': 'block',
        'opacity': 0
      });
      destini.$emailDiv.animate({
        'opacity': 1,
        'top': destini.distanceFromTop
      }, {
        duration: 50,
        queue: false
      });
    }
  }
  $(document).on('click', '.js-emailToggle', destini.emailToggle);
})();