(function ($) {

  if (jQuery(".block-pharmacie-edit-block").length>0){
    jQuery(".block-formblock-node").wrap('<div id="envoi-mdo" class="tab-pane custom-tab-pane show fade in active"></div>');
    jQuery(".block-pharmacie-edit-block").wrap('<div id="profile-form" class="tab-pane custom-tab-pane fade"></div>');
    jQuery('.custom-tab-pane').wrapAll('<div class="tab-content"></div>>');
  }

  Drupal.behaviors.pharmacie = {
    attach: function () {
      // alert("hello");

    }}
})(jQuery);
