$(function() {

  let $list = $('ul');
  let $newItemForm = $('#newItemForm');
  
  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val('');
  });

  $list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
  });


  $(document).ready(function () {
    $('#newItemForm').on('input change', function () {
        if ($(this).val() != '') {
            $('#add').prop('disabled', false);
        }
        else {
            $('#add').prop('disabled', true);
        }
    });
});

});