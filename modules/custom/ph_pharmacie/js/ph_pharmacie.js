(function ($) {

  jQuery(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });

  if (jQuery(".block-pharmacie-edit-block").length > 0) {
    // jQuery(".block-formblock-node").wrap('<div id="envoi-mdo" class="tab-pane custom-tab-pane show fade in active"></div>');
    jQuery(".block-pharmacie-edit-block").wrap('<div id="profile-form" class="tab-pane custom-tab-pane fade in active"></div>');
    jQuery(".historique-pharmacie").parent().parent().parent().wrap('<div id="history-pharma" class="tab-pane custom-tab-pane fade"></div>');
    // jQuery(".securite-pharma").parent().parent().parent().wrap('<div id="security-pharma" class="tab-pane custom-tab-pane fade"></div>');
    jQuery('.custom-tab-pane').wrapAll('<div class="tab-content"></div>>');
  }
  // if (jQuery('.block-views-blocknotifications-pharmacie-block-1').length > 0) {
  //   $(".views-field.views-field-field-etat span:contains('En attente')").addClass('badge-primary');
  //   $(".views-field.views-field-field-etat span:contains('Repris')").addClass('badge-success');
  //   $(".views-field.views-field-field-etat span:contains('Annulé')").addClass('badge-danger');
  //
  //   jQuery('#dropdownMenuLink').hide()
  //   jQuery('.ajax-progress-throbber').remove()
  //   jQuery('.ajax-progress-fullscreen').remove()
  //
  //   jQuery('#global-notif').hide()
  //   jQuery('#dernier-acces').hide()
  //   jQuery('#global-notif').val(jQuery('#dropdownMenuLink').html().replace(/\ /g, ''))
  //   jQuery('#custom-submit').html(jQuery('#global-notif').val() - jQuery('#dernier-acces').val())
  //   jQuery('#shown-button-notif').html(jQuery('#custom-submit').html())
  //   jQuery('#shown-button-notif').click(function () {
  //     jQuery('#custom-submit').click()
  //   })
  //   jQuery('#shown-button-notif').click(function () {
  //     jQuery('.ajax-progress-throbber').remove()
  //     jQuery('.ajax-progress-fullscreen').remove()
  //
  //     jQuery("#block-notifpharmaciebutton .dropdown .view-content.row").remove()
  //     jQuery('.btn-hide .view-content.row').clone().prependTo(jQuery("#block-notifpharmaciebutton .dropdown"));
  //     jQuery('.dropdown .view-content.row').addClass('dropdown-menu');
  //     if ((jQuery('#block-notifpharmaciebutton .dropdown').hasClass('show')) == true) {
  //       jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').addClass('show')
  //     }else {
  //       jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').removeClass('show')
  //     }
  //   })
  //   jQuery('#custom-submit').hide()
  //   jQuery('.btn-hide .view-content.row').hide()
  //   jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').removeAttr("style");
  // }


  Drupal.behaviors.pharmacie = {
    attach: function () {
      // if (jQuery('.block-views-blocknotifications-pharmacie-block-1').length > 0) {
      //
      //   $(".views-field.views-field-field-etat span:contains('En attente')").addClass('badge-primary');
      //   $(".views-field.views-field-field-etat span:contains('Repris')").addClass('badge-success');
      //   $(".views-field.views-field-field-etat span:contains('Annulé')").addClass('badge-danger');
      //
      //
      //   jQuery('.ajax-progress-throbber').remove()
      //   jQuery('.ajax-progress-fullscreen').remove()
      //
      //   jQuery('#dropdownMenuLink').hide()
      //   jQuery('#global-notif').hide()
      //   jQuery('#dernier-acces').hide()
      //   jQuery('.btn-hide .view-content.row').hide()
      //   jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').removeAttr("style");
      //   jQuery('#global-notif').val(jQuery('#dropdownMenuLink').html().replace(/\ /g, ''))
      //   jQuery('#custom-submit').html(jQuery('#global-notif').val() - jQuery('#dernier-acces').val())
      //   jQuery('#shown-button-notif').html(jQuery('#custom-submit').html())
      //   jQuery('#shown-button-notif').click(function () {
      //     jQuery("#block-notifpharmaciebutton .dropdown .view-content.row").remove()
      //     jQuery('.btn-hide .view-content.row').clone().prependTo(jQuery("#block-notifpharmaciebutton .dropdown"));
      //     jQuery('.dropdown .view-content.row').addClass('dropdown-menu');
      //     if ((jQuery('#block-notifpharmaciebutton .dropdown').hasClass('show')) == true) {
      //       jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').addClass('show')
      //     }else {
      //       jQuery('#block-notifpharmaciebutton  .view-content.row.dropdown-menu').removeClass('show')
      //     }
      //   })
      //
      //   //          jQuery('#custom-submit').click();
      //   jQuery('#shown-button-notif').click(function () {
      //     jQuery('.ajax-progress-throbber').remove()
      //     jQuery('.ajax-progress-fullscreen').remove()
      //
      //     jQuery('#custom-submit').click()
      //   })
      //   jQuery('#custom-submit').hide()
      //   jQuery('#custom-submit').click(function () {
      //     jQuery('#dernier-acces').val(jQuery('#global-notif').val())
      //   })
      // }


    }
  }
})(jQuery);
