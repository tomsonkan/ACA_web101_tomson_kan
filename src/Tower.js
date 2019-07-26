'use strict';

$(document).ready(function() {
  let $block = null;
  
  $('[data-column]').click(function() {
    if ($block) {
      $(this).prepend($block);
      $block = null;
    } else {
      $block = $(this).children().first().detach();
    }
    
  })
})

var data = {
  totalMoves: 0
};

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalMoves));
}

$('[data-color]').click(function (){
  data.totalMoves ++;
  updateReport();
})