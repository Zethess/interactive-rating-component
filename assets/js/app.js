class TemplateManager {

  loadEventListeners() {
    $(document).ready(() => {
      $("#ratingForm").submit((event) => {
        event.preventDefault(); // Prevenir la recarga de la página
        this.changeThankYouCardInputValue($(event.currentTarget));
      });
      $("input[name='rating']").change(function() {
        const btn=$("#flipButton");
        btn.prop("disabled", false);
        btn.addClass('checked');
      });
      $("#flipButton").click(function() {
          $(".card").toggleClass("flip");
      });
    }); 
  }
  changeThankYouCardInputValue(form){
    var formRatingValue=form.find("input[name='rating']:checked").val();
    const cardElement = form.closest('.card'); 
    const thankYouCardSelectedSpan = cardElement.find('.thank-you-card .selected-rating-paragraph span');
    thankYouCardSelectedSpan.text(formRatingValue !== undefined ? formRatingValue : '3');
  }
  init() {
    this.loadEventListeners();
}
}
const templateManager = new TemplateManager();
templateManager.init();
