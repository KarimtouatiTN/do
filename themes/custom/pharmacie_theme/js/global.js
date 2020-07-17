/**
 * @file
 * Global utilities.
 *
 */
 
 
 
 
 (function ($) {
	 
if ($('.path-frontpage').length>0){
  let panel2 = document.querySelector('.panel:nth-child(2)');

setTimeout( function() {
  panel2.classList.add('open');
  
  setTimeout( function() {
    panel2.classList.remove('open');
  }, 1500);
}, 500);

/*$('.count').each(function () {
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
*/

jQuery(".field--name-field-nom input").attr("placeholder", "Nom");

jQuery(".field--name-field-email input").attr("placeholder", "E-mail");
jQuery(".field--name-field-telephone input").attr("placeholder", "Téléphone");
jQuery(".field--name-field-message textarea").attr("placeholder", "Message");


$( "#id-tunis" ).hover(
  function() {$('#Tunis').addClass('bg-hover-map');},
  function(){ $('#Tunis').removeClass('bg-hover-map') }
);

$( "#id-ariana" ).hover(
  function() {$('#ariana').addClass('bg-hover-map');},
  function(){ $('#ariana').removeClass('bg-hover-map') }
);

$( "#id-manouba" ).hover(
  function() {$('#manouba').addClass('bg-hover-map');},
  function(){ $('#manouba').removeClass('bg-hover-map') }
);

$( "#id-bn-arous" ).hover(
  function() {$('#ben-arous').addClass('bg-hover-map');},
  function(){ $('#ben-arous').removeClass('bg-hover-map') }
);

}






if ($('.path-commander').length>0){
 // alert('ookiik');
  $('<label class="switch"><input type="checkbox" id="togBtn"><div class="slider round"><span class="on">Urgent</span><span class="off">Normal</span><!--END--></div></label>').insertBefore('.field--name-field-urgence')


 $(document).on('click', '.on ', function () {
 jQuery( "select" ).val(2);
 });

  $(document).on('click', '.off', function () {
  jQuery( "select" ).val(1);
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
