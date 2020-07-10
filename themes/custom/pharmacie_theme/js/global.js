/**
 * @file
 * Global utilities.
 *
 */
 
 
 
 
 (function ($) {
	 
if ($('.path-frontpage').length>0){
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
}
	 
	 
	 })(jQuery);

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.pharmacie_theme = {
    attach: function (context, settings) {


    }
  };

})(jQuery, Drupal);
