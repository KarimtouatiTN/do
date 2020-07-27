/**
 * @file
 * Global utilities.
 *
 */


sliderInt=1;
sliderNext=2;

function startSlider() {
  count = jQuery("#slider > img").length;
  
  //run function every 3 secs
  loop = setInterval(function() {
    
    if(sliderNext > count)
    {
      sliderNext = 1;
      sliderInt = 1;
    }
    
    jQuery("#slider > img").fadeOut(300);
    jQuery("#slider > img#" + sliderNext).fadeIn(300);
    
    sliderInt = sliderNext;
    sliderNext++;
    
  }, 3000);
}

function prev() {
  newSlide = sliderInt -1;
  showSlide(newSlide);
}

function next() {
  newSlide = sliderInt +1;
  showSlide(newSlide);
}

function showSlide(id) {
  stopLoop();
  if(id > count)
    {
      id = 1;
    }
  else if(id < 1)
    {
      id = count;
    }
    
    jQuery("#slider > img").fadeOut(300);
    jQuery("#slider > img#" + id).fadeIn(300);
    
    sliderInt = id;
    sliderNext = id + 1;
  startSlider();
}

function stopLoop() {
  //stop the loop you created in setInterval
  window.clearInterval(loop);
}

jQuery("#slider > img").hover(
  function() {
    stopLoop();
  },
  function() {
    startSlider();
  }
  );









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


jQuery(document).ready(function() {
  //alert("pzzzzppmo");
  jQuery("#slider > img#1").fadeIn(300);
  startSlider();
})




if ($('header').length>0){

$(".login.button span").html('SE CONNECTER');
  $("<i class='fa fa-envelope-o'></i></i>").insertBefore($('.drop-down-login-container .js-form-item-name input'));
   $("<i class='fa fa-lock'></i>").insertBefore($('.drop-down-login-container .js-form-item-pass input'))
    
 
  }



jQuery('a[href^="#block-maptunsie"]').on('click', function (event) {
        var target = jQuery(this.getAttribute('href'));
        if (target.length) {

          event.preventDefault();
          jQuery('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 1000);
        }
      });





if ($('.path-mon-profil').length>0){

jQuery(".layout-main-wrapper #main").removeClass("container");

$('input').focus(
    function(){
       $(this).parent().addClass("border-field");
        
    }).blur(
    function(){
          $(this).parent().removeClass("border-field");
    });



$('select').change(
    function(){
       $(this).parent().addClass("border-field");
        
    }).blur(
    function(){
          $(this).parent().removeClass("border-field");
    });


$('textarea').focus(
    function(){
       $(this).parent().parent().addClass("border-field");
        
    }).blur(
    function(){
          $(this).parent().parent().removeClass("border-field");
    });

}


if ($('.path-frontpage').length>0){
jQuery("#contact-message-contact-form .field--name-field-nom input").attr("placeholder", "Nom");
jQuery("#contact-message-contact-form .field--name-field-email input").attr("placeholder", "E-mail");
jQuery("#contact-message-contact-form .field--name-field-telephone input").attr("placeholder", "Téléphone");
jQuery("#contact-message-contact-form .field--name-field-message textarea").attr("placeholder", "Message");


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



 $('<div class="toggle-boolean"><label class="switch"><input type="checkbox" id="togBtn"><div class="slider round"><span class="on">Urgente</span><span class="off">Normal</span><!--END--></div></label></div>').insertBefore('.field--name-field-etat-commande')
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

if ($("#contact-message-newsletter-form").length>0){
jQuery(".field--name-field-email input").attr("placeholder", "Entrez votre email");


}



if ($('header').length>0){
//alert("zzzz")
  $("#shown-button-notif").css('background','red');
  $("#shown-button-notif:contains('0')").css('background','white');
}



if ($('.path-mon-profil').length>0){


$('select').change(
    function(){
       $(this).parent().addClass("border-field");
        
    }).blur(
    function(){
          $(this).parent().removeClass("border-field");
    });


}


    }
  };

})(jQuery, Drupal);
