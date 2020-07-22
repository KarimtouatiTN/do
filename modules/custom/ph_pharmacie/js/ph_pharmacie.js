(function ($) {


  if (jQuery(".block-pharmacie-edit-block").length > 0) {
    jQuery(".block-formblock-node").wrap('<div id="envoi-mdo" class="tab-pane custom-tab-pane show fade in active"></div>');
    jQuery(".block-pharmacie-edit-block").wrap('<div id="profile-form" class="tab-pane custom-tab-pane fade"></div>');
    jQuery('.custom-tab-pane').wrapAll('<div class="tab-content"></div>>');
  }
  if (jQuery('.block-views-blocknotifications-pharmacie-block-1').length > 0) {
    jQuery('#dropdownMenuLink').hide()
    jQuery('.ajax-progress-throbber').remove()

    jQuery('#global-notif').hide()
    jQuery('#dernier-acces').hide()
    jQuery('#global-notif').val(jQuery('#dropdownMenuLink').html().replace(/\ /g, ''))
    jQuery('#custom-submit').html(jQuery('#global-notif').val() - jQuery('#dernier-acces').val())
    jQuery('#shown-button-notif').html(jQuery('#custom-submit').html())
    jQuery('#shown-button-notif').click(function () {
      jQuery('#custom-submit').click()
    })
    jQuery('#shown-button-notif').click(function () {
      jQuery('.ajax-progress-throbber').remove()

      jQuery("#block-notifpharmaciebutton .dropdown .view-content.row").remove()
      jQuery('.btn-hide .view-content.row').clone().prependTo(jQuery("#block-notifpharmaciebutton .dropdown"));
      jQuery('.dropdown .view-content.row').addClass('dropdown-menu');
      if ((jQuery('#block-notifpharmaciebutton .dropdown').hasClass('show')) == true) {
        jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').addClass('show')
      }else {
        jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').removeClass('show')
      }
    })
    jQuery('#custom-submit').hide()
    jQuery('.btn-hide .view-content.row').hide()
    jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').removeAttr("style");
  }


  Drupal.behaviors.pharmacie = {
    attach: function () {
      if (jQuery('.block-views-blocknotifications-pharmacie-block-1').length > 0) {
        jQuery('.ajax-progress-throbber').remove()
        jQuery('#dropdownMenuLink').hide()
        jQuery('#global-notif').hide()
        jQuery('#dernier-acces').hide()
        jQuery('.btn-hide .view-content.row').hide()
        jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').removeAttr("style");
        jQuery('#global-notif').val(jQuery('#dropdownMenuLink').html().replace(/\ /g, ''))
        jQuery('#custom-submit').html(jQuery('#global-notif').val() - jQuery('#dernier-acces').val())
        jQuery('#shown-button-notif').html(jQuery('#custom-submit').html())
        jQuery('#shown-button-notif').click(function () {
          jQuery("#block-notifpharmaciebutton .dropdown .view-content.row").remove()
          jQuery('.btn-hide .view-content.row').clone().prependTo(jQuery("#block-notifpharmaciebutton .dropdown"));
          jQuery('.dropdown .view-content.row').addClass('dropdown-menu');
          if ((jQuery('#block-notifpharmaciebutton .dropdown').hasClass('show')) == true) {
            jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').addClass('show')
          }else {
            jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').removeClass('show')
          }
        })

        //          jQuery('#custom-submit').click();
        jQuery('#shown-button-notif').click(function () {
          jQuery('.ajax-progress-throbber').remove()
          jQuery('#custom-submit').click()
        })
        jQuery('#custom-submit').hide()
        jQuery('#custom-submit').click(function () {
          jQuery('#dernier-acces').val(jQuery('#global-notif').val())
        })
      }


    }
  }
})(jQuery);
