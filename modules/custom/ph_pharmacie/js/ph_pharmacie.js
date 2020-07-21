(function ($) {

  if (jQuery(".block-pharmacie-edit-block").length>0){
    jQuery(".block-formblock-node").wrap('<div id="envoi-mdo" class="tab-pane custom-tab-pane show fade in active"></div>');
    jQuery(".block-pharmacie-edit-block").wrap('<div id="profile-form" class="tab-pane custom-tab-pane fade"></div>');
    jQuery('.custom-tab-pane').wrapAll('<div class="tab-content"></div>>');
  }
  jQuery('#edit-chat-sender').val(jQuery('#dropdownMenuLink').html().replace(/\ /g,''))
  jQuery('#custom-submit').attr('value',jQuery('#global-notif').val()-jQuery('#dernier-acces').val())

  Drupal.behaviors.pharmacie = {
    attach: function () {
      jQuery('#global-notif').val(jQuery('#dropdownMenuLink').html().replace(/\ /g,''))
      jQuery('#custom-submit').attr('value',jQuery('#global-notif').val()-jQuery('#dernier-acces').val())
      jQuery('#custom-submit').click(function () {
        jQuery('#dernier-acces').val(jQuery('#global-notif').val())
      })

    }}
})(jQuery);
