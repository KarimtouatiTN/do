/**
 * @file
 * Global utilities.
 *
 */
 
 
 
 
 (function ($) {
/*
  if ($('body').length>0){

if (!$('body').hasClass("user-logged-in")){
   $('.fixed-top').remove();
    $('.bg-primary').removeClass('menu-nav-ht');


}
else{
 
  $('.bg-primary').addClass('menu-nav-ht');
}
}
	*/ 




if ($('header').length>0){

  $("#block-views-block-notifications-pharmacie-block-1 button").click(function(){
    alert('ooso');
    $(".view-notifications-pharmacie").slideToggle("slow");
  });

  //alert('iiolomo');
  $('#block-views-block-notifications-pharmacie-block-1 .content').prepend($('#custom-submit'))

     


}




if ($('.path-frontpage').length>0){

//$('.block-views-blockcustomer-view-block-1').append($('.compteur-front'));




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


$(".btn_container").click(function(){
  $(".over_lay").css({
    width: "100%"
  });
  $(".list_items_container").css({
    left: "0px"
  });
});
$(".over_lay, .close_btn").click(function(){
  $(".over_lay").css({
    width: "0px"
  });
  $(".list_items_container").css({
    left: "-300px"
  });
});

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



 $('<div class="toggle-boolean"><label class="switch"><input type="checkbox" id="togBtn"><div class="slider round"><span class="on">Urgente</span><span class="off">Normal</span><!--END--></div></label></div>').insertBefore('.field--name-field-grossiste')
 //alert('fdfd')




 // alert('ookiik');
  


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
      if ($('.path-commander').length>0){

      jQuery(".field--name-field-medicament input").attr("placeholder", "Médicament");
jQuery(".field--name-field-quantite input").attr("placeholder", "Quantité");
jQuery(".field--name-field-grossiste input").attr("placeholder", "Grossiste");

  $(' <span class="focus-border"><i></i></span>').insertAfter('.paragraphs-subform input,.field--name-field-grossiste input');
    $('.field-add-more-submit').text('Ajouter');
         $('<div class="thead-med"><div>Mécicament</div><div>Quantitié</div></div>').insertAfter('table thead tr:nth-child(1)');



}



if ($('header').length>0){
//alert("zzzz")
  $("#shown-button-notif:contains('0')").css('background','white');  
 
  


}
    }
  };

})(jQuery, Drupal);
