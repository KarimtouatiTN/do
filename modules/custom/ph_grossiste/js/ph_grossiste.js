(function ($) {

  if (jQuery(".block-grossiste-edit-block").length>0){
    jQuery(".block-views-blockles-commanndes-grossistes-block-1").wrap('<div id="mes-commandes" class="tab-pane custom-tab-pane show fade in active"></div>');
    jQuery(".block-grossiste-edit-block").wrap('<div id="profile-form" class="tab-pane custom-tab-pane fade"></div>');
    jQuery('.custom-tab-pane').wrapAll('<div class="tab-content"></div>>');
  }

  Drupal.behaviors.grossiste = {
    attach: function () {
      // alert("hello");

    }}
})(jQuery);
