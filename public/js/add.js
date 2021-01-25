
// awal js buat map
// screen.width
var mymap = L.map('mapid', {
    center: [-2.5, 118],
    zoom: 5
});

var myStyle = {
    "color": "#014F86",
    "fillColor": "#FFFFFF",
    "weight": 2,
    "opacity": 1,
    "fillOpacity": 1
};



function popUp(f, l) {
    var out = [];
    if (f.properties) {
        out.push("<div class='font-bold text-primary text-center uppercase font-heading'> " + f.properties["Propinsi"] + "</div> <hr>");
        out.push("<div class='text-center font-semibold text-primary uppercase font-paragraph'>" + f.properties["kode"] + "</div>");
        out.push("<div class='text-center font-semibold text-primary uppercase font-paragraph'> ALUMNI </div>");
        l.bindPopup(out.join(""));
    }
}
var jsonTest = new L.GeoJSON.AJAX(["/geojson/provinsi.geojson"], {
    onEachFeature: popUp,
    style: myStyle
}).addTo(mymap);

// akhir js buat map