import jQuery from "jquery";

jQuery(document).ready(function () {

  //Range slider
  const slider = document.querySelector('.range-block__slider');
  const output = document.querySelector('.range-block__percent');
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };


  // Mobile menu
  jQuery(".nav-btn__button").on("click", function () {
    const target = jQuery(this).data("target");
    jQuery(target).toggleClass("nav__list--open");
  });


});