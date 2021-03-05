// awal sidebar

$('.hamburgerSidebar').click(function(){
    $('.param1').toggleClass('hidden');
    $('.param2').toggleClass('hidden');
    $('.sidebarSearch').toggleClass('w-10/12 md:w-auto');
})

const filterSidebar = document.querySelectorAll(".filterSidebar");

filterSidebar.forEach(o => {
    o.addEventListener("click", () => {
        filterSidebar.forEach(p => {
            p.classList.remove('text-secondary');
            if(!p.classList.contains('text-white')){
                p.classList.add('text-white');
            }
        });
        o.classList.remove('text-white');
        o.classList.add('text-secondary');
        getList(o.innerHTML);
    })
})

const listSidebar = document.querySelectorAll(".listSidebar");

listSidebar.forEach(o => {
    o.addEventListener("click", () => {
        a = o.firstElementChild.innerHTML;
        o.children[1].classList.toggle("hidden");
        o.children[2].classList.toggle("hidden");
        getList(a);
    })
})

const namaProdi = document.querySelectorAll(".namaProdi");
namaProdi.forEach(o => {
    o.children[0].addEventListener("click", () => {
        namaProdi.forEach(p => {
            p.classList.remove('text-secondary');
            p.classList.remove('bg-primaryDark');
            p.classList.add('text-white');
            p.children[1].classList.add('hidden');
        });
        o.classList.add('text-secondary');
        o.classList.add('bg-primaryDark');
        o.classList.remove('text-white');
        o.children[1].classList.remove('hidden');
    })
})

namaProdi.forEach(o => {
    o.children[1].addEventListener("click", () => {
        o.classList.remove('text-secondary');
        o.classList.remove('bg-primaryDark');
        o.classList.add('text-white');
        o.children[1].classList.add('hidden');
    })
})

function toggleTempatKerja() {
    $('.onBPS').toggleClass('hidden');
    $('.offBPS').toggleClass('hidden');
    $('.onLainnya').toggleClass('hidden');
    $('.offLainnya').toggleClass('hidden');
    $('.inputBPS').toggleClass('text-gray-300');
    $('.inputBPS').toggleClass('text-primary');
    $('.inputTempatKerjaLainnya').toggleClass('text-gray-300');
    $('.inputTempatKerjaLainnya').toggleClass('text-primary');
    if($('.offBPS').hasClass('hidden')){
        console.log('a');
    };
    alert($('.onBPS').toggleClass('hidden'));

}

$('.BPS').click(function(){
    toggleTempatKerja();
})

$('.Lainnya').click(function(){
    toggleTempatKerja();
})

$(".inputBPS").focus(function() {
    if ($(".onBPS").hasClass('hidden')) {
        toggleTempatKerja();
    }
});

$(".inputTempatKerjaLainnya").focus(function() {
    if ($(".onLainnya").hasClass('hidden')) {
        toggleTempatKerja();
    }
});

function getList(param){
    
    if(param == 'Semua'){
        $('.listFilterSidebarAlumni').addClass('hidden');
        $('.listFilterSidebarBerita').addClass('hidden');
    }

    if(param == 'Alumni'){
        $('.listFilterSidebarAlumni').removeClass('hidden');
        $('.listFilterSidebarBerita').addClass('hidden');
    }
    
    if(param == 'Artikel/Berita'){
        $('.listFilterSidebarBerita').removeClass('hidden');
        $('.listFilterSidebarAlumni').addClass('hidden');
    }

    if(param == 'Prodi'){
        $('.listProdi').toggleClass('hidden');
    } 

    if(param == 'Angkatan'){
        $('.listAngkatan').toggleClass('hidden');
    } 
    
    if(param == 'Tempat Kerja'){
        $('.listTempatKerja').toggleClass('hidden');
    } 

    if(param == 'Rentang Waktu'){
        $('.listRentangWaktu').toggleClass('hidden');
    } 

    
}


// Awal Kalender

var waktu = new Date();
var tahunfix = waktu.getFullYear();
var tahunAwal = waktu.getFullYear();
var tahunAkhir = waktu.getFullYear();

// Awal kalender Tahun Awal
$('.inputTahunAwal').click(function(){
    $('.kalenderAwal').removeClass('hidden');
    $('.kalenderAkhir').addClass('hidden');
})	

const tahunKalenderAwal = document.querySelectorAll(".tahunKalenderAwal");
const inputTahunAwal = document.querySelector(".inputTahunAwal");
const rentangTahunAwal = document.querySelector(".rentangTahunAwal");

function getWaktuKalenderAwal(param){
    var param = param - 11;
    rentangTahunAwal.innerHTML = param+"-"+ (param + 11);
    tahunKalenderAwal.forEach(o =>{

        o.innerHTML = param;
        param++;

    })
};

getWaktuKalenderAwal(tahunfix)

$('.perviousTahunAwal').click(function(){
    tahunAwal = tahunAwal - 11;
    getWaktuKalenderAwal(tahunAwal);
})	

$('.nextTahunAwal').click(function(){
    if(tahunAwal + 11 <= tahunfix){
        tahunAwal = tahunAwal + 11;	
        getWaktuKalenderAwal(tahunAwal);
    }	    
})

tahunKalenderAwal.forEach(o => {
    o.addEventListener("click", () => {
        param = o.innerHTML;
        if(inputTahunAkhir.value != ""){
            if(param < inputTahunAkhir.value ){
                inputTahunAwal.value=param;
                inputTahunAwal.classList.remove('border-2');
                inputTahunAwal.classList.remove('border-red-600');
            } else {
                inputTahunAwal.classList.add('border-2');
                inputTahunAwal.classList.add('border-red-600');
            }
        } else {
            inputTahunAwal.value=param;
            inputTahunAwal.classList.remove('border-2');
            inputTahunAwal.classList.remove('border-red-600');
        }
    })
})
//Akhir Kalender Tahun Awal


// Awal Kalender Tahun Akhir
$('.inputTahunAkhir').click(function(){
    $('.kalenderAwal').addClass('hidden');
    $('.kalenderAkhir').removeClass('hidden');
})	

const tahunKalenderAkhir = document.querySelectorAll(".tahunKalenderAkhir");
const inputTahunAkhir = document.querySelector(".inputTahunAkhir");
const rentangTahunAkhir = document.querySelector(".rentangTahunAkhir");

function getWaktuKalenderAkhir(param){
    var param = param - 11;
    rentangTahunAkhir.innerHTML = param+"-"+ (param + 11);
    tahunKalenderAkhir.forEach(o =>{

        o.innerHTML = param;
        param++;

    })
};

getWaktuKalenderAkhir(tahunfix)

$('.perviousTahunAkhir').click(function(){
    tahunAkhir = tahunAkhir - 11;
    getWaktuKalenderAkhir(tahunAkhir);
})	

$('.nextTahunAkhir').click(function(){
    if(tahunAkhir + 11 <= tahunfix){
        tahunAkhir = tahunAkhir + 11;	
        getWaktuKalenderAkhir(tahunAkhir);
    }	    
})

tahunKalenderAkhir.forEach(o => {
    o.addEventListener("click", () => {
        param = o.innerHTML;
        if(inputTahunAwal.value != ""){
            if(param > inputTahunAwal.value ){
                inputTahunAkhir.value=param;
                inputTahunAkhir.classList.remove('border-2');
                inputTahunAkhir.classList.remove('border-red-600');
            } else {
                inputTahunAkhir.classList.add('border-2');
                inputTahunAkhir.classList.add('border-red-600');
            }
        } else {
            inputTahunAkhir.value=param;
            inputTahunAkhir.classList.remove('border-2');
            inputTahunAkhir.classList.remove('border-red-600');
        }
    })
})
//Akhir Kalender Tahun AKhir



// Akhir Kaleneder

// akhir sidebar
