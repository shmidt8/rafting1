$(document).ready(function(){
  // FAQ
  (function() {
    $(document).on('click', '.appeal_top', function() {
      $(this).toggleClass('is-active');
      $(this).closest('.appreal_item').find('.appeal_bottom').slideToggle(400);
    });
  })();
});