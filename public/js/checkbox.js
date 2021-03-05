
$('.scope').click(function() {
  let id = $(this).attr('data-id');
    if($('#scope'+id).is(':checked'))
  {
    $('#labelScope'+id).addClass("text-primary");
    $('#labelScope'+id).addClass("font-bold");
  } else {
    $('#labelScope'+id).removeClass("text-primary");  
    $('#labelScope'+id).removeClass("font-bold");
  }
});




