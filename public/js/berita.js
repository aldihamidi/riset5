$( "img" ).ready( function(){
var panjangGambarBerita =  $( ".gambarBerita" ).width();
var tinggiGambarBerita = (panjangGambarBerita/5)*3;
$( ".gambarBerita" ).height(tinggiGambarBerita);
});

$( window ).resize(function() {
    var panjangGambarBerita =  $( ".gambarBerita" ).width();
    var tinggiGambarBerita = (panjangGambarBerita/4)*3;
    $( ".gambarBerita" ).height(tinggiGambarBerita);
  });

