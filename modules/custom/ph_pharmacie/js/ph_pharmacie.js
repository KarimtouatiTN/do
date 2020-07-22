(function ($) {


  if (jQuery(".block-pharmacie-edit-block").length > 0) {
    jQuery(".block-formblock-node").wrap('<div id="envoi-mdo" class="tab-pane custom-tab-pane show fade in active"></div>');
    jQuery(".block-pharmacie-edit-block").wrap('<div id="profile-form" class="tab-pane custom-tab-pane fade"></div>');
    jQuery('.custom-tab-pane').wrapAll('<div class="tab-content"></div>>');
  }

  if (jQuery('.block-views-blocknotifications-pharmacie-block-1').length > 0) {
    jQuery('#edit-chat-sender').val(jQuery('#dropdownMenuLink').html().replace(/\ /g, ''))
    jQuery('#custom-submit').html(jQuery('#global-notif').val() - jQuery('#dernier-acces').val())
  }


  Drupal.behaviors.pharmacie = {
    attach: function () {

      if (jQuery('.block-views-blocknotifications-pharmacie-block-1').length > 0) {
        jQuery('#global-notif').val(jQuery('#dropdownMenuLink').html().replace(/\ /g, ''))
        jQuery('#custom-submit').html(jQuery('#global-notif').val() - jQuery('#dernier-acces').val())
        jQuery('#custom-submit').click(function () {
          jQuery('#dernier-acces').val(jQuery('#global-notif').val())
        })
      }


    }
  }
})(jQuery);
