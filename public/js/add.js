
// awal js buat map
var skalaAwal = 5;

var mymap = L.map('mapid', {
    center: [-2.5, 118],
    zoom: skalaAwal
});

var myStyle = {
    "color": "#014F86",
    "fillColor": "#FFFFFF",
    "weight": 2,
    "opacity": 1,
    "fillOpacity": 1
};


var jsonTest = new L.GeoJSON.AJAX(["/geojson/provinsi.geojson"], {
    onEachFeature: popUp,
    style: myStyle
}).addTo(mymap);


function popUp(f, l) {
    var out = [];
    if (f.properties) {
        out.push(`
        <div class='font-semibold md:text-base text-xs text-primary text-center uppercase font-heading px-3'>` + f.properties["NAME_1"] + `</div>
        <hr class='my-2 px-2'>
        <div class="overflow-auto h-32 px-2">
        `);
        for (i = 0; i < 10; i++) {
            out.push("<div class='text-center font-semibold text-primary uppercase font-paragraph mb-1'>" + f.properties["NAME_1"] + " : <span class='font-bold'>" + f.properties["ID_1"] + "</span> Alumni </div>");
        }
        out.push("</div>");
        l.bindPopup(out.join(""));
    }
   
    l.on({
        mouseover: function(e) {
            e.target.setStyle({
                color: "#FFAA00",
                fillColor: "#FFFFFF",
                weight: 2,
                opacity: 1,
                fillOpacity: 1
            });
        },
        mouseout: function(e) {
            e.target.setStyle({
                color: "#014F86",
                fillColor: "#FFFFFF",
                weight: 2,
                opacity: 1,
                fillOpacity: 1
            });
        },
        click: function(e) {
            e.target.setStyle({
                color: "#FFAA00",
                fillColor: "#FFFFFF",
                weight: 2,
                opacity: 1,
                fillOpacity: 1
            });
        }
    });
}



$('.filterPeta').click(function () {
    klikFilterPeta();
});


function klikFilterPeta(){
    $('.downFilterPeta').toggleClass('hidden');
    $('.upFilterPeta').toggleClass('hidden');
    $('.listFilterPeta').toggleClass('hidden');
};


$('.petaProvinsi').click(function () {

    $('.hasilFilterPeta').text('Provinsi');
    
    var jsonTest = new L.GeoJSON.AJAX(["/geojson/provinsi.geojson"], {
        onEachFeature: popUp,
        style: myStyle
    }).addTo(mymap);
    
});

$('.petaKabupaten').click(function () {
    $('.hasilFilterPeta').text('Kabupaten');


    function popUp(f, l) {
        var out = [];
        if (f.properties) {
            out.push("<div class='md:text-base text-xs text-primary font-semibold text-center uppercase font-heading'> "+ f.properties["TYPE_2"] +" "+ f.properties["NAME_2"] + "</div> <hr class='my-2'>");
            out.push("<div class='font-bold text-center md:text-base text-xs text-primary uppercase font-paragraph'>" + f.properties["ID_2"] + "</div>");
            out.push("<div class='text-center md:text-base text-xs font-semibold text-primary font-paragraph'> Alumni</div>");
            l.bindPopup(out.join(""));
        }

        l.on({
            mouseover: function(e) {
                e.target.setStyle({
                    color: "#FFAA00",
                    fillColor: "#FFFFFF",
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 1
                });
            },
            mouseout: function(e) {
                e.target.setStyle({
                    color: "#014F86",
                    fillColor: "#FFFFFF",
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 1
                });
            },
            click: function(e) {
                e.target.setStyle({
                    color: "#FFAA00",
                    fillColor: "#FFFFFF",
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 1
                });
            }
        });
    }

    var jsonTest = new L.GeoJSON.AJAX(["/geojson/kabupaten.geojson"], {
        onEachFeature: popUp,
        style: myStyle
    }).addTo(mymap);
   
});




// akhir js buat map

// awal info map 
$('.tombolInfo').click(function () {
    $('.info').toggleClass('hidden');
});

$('.tombolInfo').mouseover(function () {
    $('.info').removeClass('hidden');
});

$('.tombolInfo').mouseout(function () {
    $('.info').addClass('hidden');
});
// akhir info map 
