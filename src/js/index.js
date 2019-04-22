import jQuery from "jquery";

jQuery(document).ready(function() {

    //Range slider
    const slider = document.querySelector('.range-block__slider');
    const output = document.querySelector('.range-block__percent');
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    };


    //Input type file


});