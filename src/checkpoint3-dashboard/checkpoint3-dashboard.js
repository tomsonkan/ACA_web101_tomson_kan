'use strict';

$(document).ready(function() {
  let color = 'black';
  $('.column').click(function() {
    $(this).prepend(`<div class="disc ${color}"></div>`);
    if (color === 'blue') {
      color = 'black';
    } else {
      color = 'blue';
    }
  });
});