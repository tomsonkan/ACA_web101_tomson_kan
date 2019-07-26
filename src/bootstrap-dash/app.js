const apiUrl = 'https://picsum.photos/id/371/200/200'

window.onload = function () {
//   $.getJSON( "ajax/test.json", function( data ) 
//     console.log('data',data)
// })

$.ajax({
  url: apiUrl,
  contentType: 'application/json',
  dataType: 'json',
  success: function(result)  {
    console.log('result',result)
    let r
  }
})

}