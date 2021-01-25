
// Awal Filter Alumni
$('#filterAlumni').click(function(){
    if ($('#filterAlumni:checked').length > 0) {
        $( "#pilihanFilterAlumni" ).removeClass('hidden');
        $('#namaFilterAlumni').addClass('text-black');
        $('#namaFilterAlumni').removeClass('text-gray-500');
    } else {
        $( "#pilihanFilterAlumni" ).addClass('hidden');
        $('#namaFilterAlumni').addClass('text-gray-500');
        $('#namaFilterAlumni').removeClass('text-black');
    }
})

$('#dropdownFilterAlumni').click(function(){
    if($('#tombolUpFilterAlumni').hasClass('hidden')){
        $('#tombolUpFilterAlumni').removeClass('hidden');
        $('#tombolDownFilterAlumni').addClass('hidden');
        $('#listFilterAlumni').addClass('hidden');
    } else {
        $('#tombolDownFilterAlumni').removeClass('hidden');
        $('#tombolUpFilterAlumni').addClass('hidden');
        $('#listFilterAlumni').removeClass('hidden');
    }
})

const list = document.querySelectorAll("#daftarFilter");
list.forEach(o => {
    o.addEventListener("click", () => {
        $('#filterBerdasarkan').html(o.innerHTML);
        $('#listFilterAlumni').addClass('hidden');
        $('#tombolUpFilterAlumni').removeClass('hidden');
        $('#tombolDownFilterAlumni').addClass('hidden');
    })
})
// Akhir Filter Alumni

// Awal Filter Berita
$('#filterBerita').click(function(){
    if ($('#filterBerita:checked').length > 0) {
        $( "#filterTahunBerita" ).removeClass('hidden');
        $('#namaFilterBerita').addClass('text-black');
        $('#namaFilterBerita').removeClass('text-gray-500');
    } else {
        $( "#filterTahunBerita" ).addClass('hidden');
        $('#namaFilterBerita').addClass('text-gray-500');
        $('#namaFilterBerita').removeClass('text-black');
    }
})

var waktu = new Date();
var tahunfix = waktu.getFullYear();
var tahunAwal = waktu.getFullYear();
var tahunAkhir = waktu.getFullYear();


const tahunKalenderAwal = document.querySelectorAll("#tahunKalenderAwal");

function getWaktuKalenderAwal(param){
    var param = param - 11;
    tahunKalenderAwal.forEach(o =>{
        o.innerHTML = param;
        param++;
    })
};

tahunKalenderAwal.forEach(o => {
    o.addEventListener("click", () => {
        $('#tahunAwal').html(o.innerHTML);
        $('#tombolUpFilterAwal').removeClass('hidden');
        $('#tombolDownFilterAwal').addClass('hidden');
        $('#listFilterTahunAwal').addClass('hidden');
    })
})


$('#dropdownFilterAwal').click(function(){
    
    if($('#tombolUpFilterAwal').hasClass('hidden')){
        $('#tombolUpFilterAwal').removeClass('hidden');
        $('#tombolDownFilterAwal').addClass('hidden');
        $('#listFilterTahunAwal').addClass('hidden');
    } else {
        tahunAwal = tahunfix;
        getWaktuKalenderAwal(tahunAwal);
        $('#tombolDownFilterAwal').removeClass('hidden');
        $('#tombolUpFilterAwal').addClass('hidden');
        $('#listFilterTahunAwal').removeClass('hidden');
    }
})

$('#perviousAwal').click(function(){
    tahunAwal = tahunAwal - 11;
    getWaktuKalenderAwal(tahunAwal);
})

$('#nextAwal').click(function(){
    if(tahunAwal + 11 <= tahunfix){
        tahunAwal = tahunAwal + 11;
        getWaktuKalenderAwal(tahunAwal);
    }
})
// ----------------------------------------
const tahunKalenderAkhir = document.querySelectorAll("#tahunKalenderAkhir");

function getWaktuKalenderAkhir(param){
    var param = param - 11;
    tahunKalenderAkhir.forEach(o =>{
        o.innerHTML = param;
        param++;
    })
};

tahunKalenderAkhir.forEach(o => {
    o.addEventListener("click", () => {
        $('#tahunAkhir').html(o.innerHTML);
        $('#tombolUpFilterAkhir').removeClass('hidden');
        $('#tombolDownFilterAkhir').addClass('hidden');
        $('#listFilterTahunAkhir').addClass('hidden');
    })
})

$('#dropdownFilterAkhir').click(function(){
    if($('#tombolUpFilterAkhir').hasClass('hidden')){
        $('#tombolUpFilterAkhir').removeClass('hidden');
        $('#tombolDownFilterAkhir').addClass('hidden');
        $('#listFilterTahunAkhir').addClass('hidden');
    } else {
        tahunAkhir = tahunfix;
        getWaktuKalenderAkhir(tahunAkhir);
        $('#tombolDownFilterAkhir').removeClass('hidden');
        $('#tombolUpFilterAkhir').addClass('hidden');
        $('#listFilterTahunAkhir').removeClass('hidden');
    }
})

$('#perviousAkhir').click(function(){
    tahunAkhir = tahunAkhir - 11;
    getWaktuKalenderAkhir(tahunAkhir);
})

$('#nextAkhir').click(function(){
    if(tahunAkhir + 11 <= tahunfix){
        tahunAkhir = tahunAkhir + 11;
        getWaktuKalenderAkhir(tahunAkhir);
    }
})





// Akhir Filter Berita