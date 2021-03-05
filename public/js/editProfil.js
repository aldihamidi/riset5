// awal js edit biodata 
$(document).ready(function() {
    $('.jk_radio').on('click',function() {
    $('.jk_radio').parent().css('color','gray');    
        $(this).parent().css('color','#014F86');
    });
    $('.sb_radio').on('click',function() {
    $('.sb_radio').parent().css('color','gray');    
        $(this).parent().css('color','#014F86');
    });
    $('.sp_radio').on('click',function() {
    $('.sp_radio').parent().css('color','gray');    
        $(this).parent().css('color','#014F86');
    });
  });
$('.updateFotoProfil').click(function () {
    $('body').prepend(`
    <div class="fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-40" id='formEditFoto'>
        <div class="hidden opacity-0 duration-700 transition-all md:w-1/3 w-2/3 bg-gray bg-opacity-0"> 
        <div class="bg-primary py-2 px-6 rounded-t-2xl flex items-center justify-center text-secondary text-sm">
            <p class="font-bold">Update Foto Profil</p>
        </div>
        <div class="bg-gray-100 rounded-b-2xl">
            <ul class="text-center font-heading font-bold text-sm text-primary">
                <li class="p-2 border-b-2 border-gray-300 cursor-pointer hover:bg-gray-300">Unggah Foto</li>
                <li class="p-2 border-b-2 border-gray-300 cursor-pointer hover:bg-gray-300" id="hapusFoto">Hapus Foto</li>
                <li class="closeEditFoto p-2 rounded-b-lg cursor-pointer hover:bg-gray-300">Batalkan</li>
            </ul>
        </div>
        </div> 
    </div>
`)

    $('#formEditFoto').children().first().removeClass('hidden')
    setTimeout(function () {
        $('#formEditFoto').children().first().removeClass('opacity-0')
    }, 10);

    $('.closeEditFoto').click(function () {
        $('#formEditFoto').children().first().addClass('opacity-0')
        $('#formEditFoto').children().first().on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function () {
            $('#formEditFoto').children().first().addClass('hidden')
        });
        setTimeout(function () {
            $('#formEditFoto').remove()
        }, 400);
    })
})

$('#submitBiodata').click(function () {
    $('body').prepend(`
    <div class="fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-40" id='modalBiodata'>
    <div class="hidden opacity-0 duration-700 transition-all p-3 rounded-lg flex items-center" style="background-color: #B1FF66;">
    <img src="/img/icon/check.png" class="h-5 mr-2" style="color: #54AC00;">
    <p class="sm:text-base text-sm font-heading font-bold" style="color: #54AC00;">Biodata Berhasil Disimpan</p>
</div>
    </div>
`)

    $('#modalBiodata').children().first().removeClass('hidden')
    setTimeout(function () {
        $('#modalBiodata').children().first().removeClass('opacity-0')
    }, 10);
})
// akhir js edit biodata

// awal js sorting

$(".sort").click(function () {
    $(".sort").not(this).children().removeClass('invisible text-primary')
    if ($(this).children().eq(0).hasClass('invisible')) {
        $(this).children().first().removeClass('invisible')
        $(this).children().first().removeClass('text-gray-400').addClass('text-primary')
        $(this).children().eq(1).addClass('invisible')
    } else {
        $(this).children().eq(1).removeClass('invisible')
        $(this).children().first().addClass('invisible')
        $(this).children().eq(1).removeClass('text-gray-400').addClass('text-primary')
    }
})

// akhir js sorting

// awal js edit pendidikan

$('.editPendidikan').click(function () {
    $('body').prepend(`
    <div class="fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-40 font-paragraph" id='formEditPendidikan'>
        <div class="hidden opacity-0 duration-700 transition-all xl:w-1/2 lg:w-7/12 md:w-2/3 sm:w-3/4 w-11/12 bg-gray bg-opacity-0">
            <div class="bg-primary py-4 px-6 rounded-t-2xl flex items-center justify-between text-secondary text-2xl">
                <p class="font-heading font-bold">Edit Pendidikan</p>
                <i class="closePendidikan fas fa-times cursor-pointer"></i>
            </div>
            <form action="" method="post" class="flex flex-col bg-gray-100 sm:px-12 px-4 rounded-b-2xl">
                <label for="editJenjang" class="text-primary text-sm mt-4">Jenjang :</label>
                <input type="text" placeholder="Nama Jenjang" class="px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editJenjang" id="editJenjang">
                <label for="editUniversitas" class="text-primary text-sm mt-3">Universitas :</label>
                <input type="text" placeholder="Nama Universitas" class="px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editUniversitas" id="editUniversitas">
                <label for="editStudi" class="text-primary text-sm mt-3">Program Studi :</label>
                <input type="text" placeholder="Nama Program Studi" class="px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editStudi" id="editStudi">
                <div class="flex">
                    <div class="flex flex-col mr-8 w-1/3">
                        <label for="editMasuk" class="text-primary text-sm mt-3">Tahun Masuk :</label>
                        <input type="date" placeholder="2021" class="cursor-pointer px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editMasuk" id="editMasuk">
                    </div>
                    <div class="flex flex-col w-1/3">
                        <label for="editLulus" class="text-primary text-sm mt-3">Tahun Lulus :</label>
                        <input type="date" placeholder="2021" class="cursor-pointer px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editLulus" id="editLulus">
                    </div>
                </div>
                <label for="editTulisan" class="text-primary text-sm mt-3">Judul Tulisan</label>
                <textarea name="editTulisan" id="editTulisan" rows="2" class="px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2 resize-none" placeholder="Gadget Paling Top Untuk Digunakan Sehari-Hari"></textarea>
                <div class="flex justify-end my-8">
                    <input type="submit" value="SIMPAN" class="bg-secondary text-white rounded-full w-24 py-0.5 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300 text-sm mr-4 outline-none">
                    <input type="button" value="KEMBALI" class="closePendidikan bg-secondary text-white rounded-full w-24 py-0.5 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300 text-sm outline-none" id='backPendidikan'>
                </div>

            </form>

        </div>
    </div>
`)

    $('#formEditPendidikan').children().first().removeClass('hidden')
    setTimeout(function () {
        $('#formEditPendidikan').children().first().removeClass('opacity-0')
    }, 10);

    $('.closePendidikan').click(function () {
        $('#formEditPendidikan').children().first().addClass('opacity-0')
        $('#formEditPendidikan').children().first().on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function () {
            $('#formEditPendidikan').children().first().addClass('hidden')
        });
        setTimeout(function () {
            $('#formEditPendidikan').remove()
        }, 400);
    })

    $('#backPendidikan').prev().click(function (e) {
        e.preventDefault()
        $('#formEditPendidikan').children().first().addClass('hidden')
        $('#formEditPendidikan').prepend(`
        <div class="hidden opacity-0 duration-700 transition-all p-3 rounded-lg flex items-center" style="background-color: #B1FF66;">
            <img src="/img/icon/check.png" class="h-5 mr-2" style="color: #54AC00;">
            <p class="sm:text-base text-sm font-heading font-bold" style="color: #54AC00;">Pendidikan Berhasil Disimpan</p>
        </div>
        `)
        $('#formEditPendidikan').children().first().removeClass('hidden')
        setTimeout(function () {
            $('#formEditPendidikan').children().first().removeClass('opacity-0')
        }, 10);
        setTimeout(function () {
            $('#formEditPendidikan').children().eq(1).children().eq(1).submit()
        }, 700);
    })

})

// akhir js edit pendidikan


// awal js edit tempat kerja
$('#submitTempatKerja').click(function () {
    $('body').prepend(`
    <div class="fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-40" id='modalTempatKerja'>
    <div class="hidden opacity-0 duration-700 transition-all p-3 rounded-lg flex items-center" style="background-color: #B1FF66;">
    <img src="/img/icon/check.png" class="h-5 mr-2" style="color: #54AC00;">
    <p class="sm:text-base text-sm font-heading font-bold" style="color: #54AC00;">Tempat Kerja Berhasil Disimpan</p>
</div>
    </div>
`)

    $('#modalTempatKerja').children().first().removeClass('hidden')
    setTimeout(function () {
        $('#modalTempatKerja').children().first().removeClass('opacity-0')
    }, 10);
})
// akhir js edit tempat kerja


// awal js edit prestasi
$('.editPrestasi').click(function () {
    $('body').prepend(`
    <div class="fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-40" id='formEditPrestasi'>
        <div class="hidden opacity-0 duration-700 transition-all xl:w-1/2 lg:w-7/12 md:w-2/3 sm:w-3/4 w-11/12 bg-gray bg-opacity-0 font-paragraph">
        <div class="bg-primary py-4 px-6 rounded-t-2xl flex items-center justify-between text-secondary text-2xl">
            <p class="font-heading font-bold">Edit Prestasi</p>
            <i class="closePrestasi fas fa-times cursor-pointer"></i>
        </div>
        <form action="" method="post" class="flex flex-col bg-gray-100 sm:px-12 px-4 rounded-b-2xl">
            <label for="editJenjang" class="text-primary text-sm mt-4">Nama Prestasi :</label>
            <input type="text" placeholder="Nama Prestasi" class="px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editJenjang" id="editJenjang">
            <label for="editMasuk" class="text-primary text-sm mt-3">Tahun Masuk :</label>
            <input type="date" placeholder="2021" class="w-2/5 cursor-pointer px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editMasuk" id="editMasuk">
            <div class="flex justify-end my-8">
                <input type="submit" value="SIMPAN" class="bg-secondary text-white rounded-full w-24 py-0.5 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300 text-sm mr-4 outline-none">
                <input type="button" value="KEMBALI" class="closePrestasi bg-secondary text-white rounded-full w-24 py-0.5 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300 text-sm outline-none" id='backPrestasi'>
            </div>
        </form>
        </div>
    </div>
    `)

    $('#formEditPrestasi').children().first().removeClass('hidden')
    setTimeout(function () {
        $('#formEditPrestasi').children().first().removeClass('opacity-0')
    }, 10);

    $('.closePrestasi').click(function () {
        $('#formEditPrestasi').children().first().addClass('opacity-0')
        $('#formEditPrestasi').children().first().on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function () {
            $('#formEditPrestasi').children().first().addClass('hidden')
        });
        setTimeout(function () {
            $('#formEditPrestasi').remove()
        }, 400);
    })

    $('#backPrestasi').prev().click(function (e) {
        e.preventDefault()
        $('#formEditPrestasi').children().first().addClass('hidden')
        $('#formEditPrestasi').prepend(`
        <div class="hidden opacity-0 duration-700 transition-all p-3 rounded-lg flex items-center" style="background-color: #B1FF66;">
            <img src="/img/icon/check.png" class="h-5 mr-2" style="color: #54AC00;">
            <p class="sm:text-base text-sm font-heading font-bold" style="color: #54AC00;">Prestasi Berhasil Disimpan</p>
        </div>
        `)
        $('#formEditPrestasi').children().first().removeClass('hidden')
        setTimeout(function () {
            $('#formEditPrestasi').children().first().removeClass('opacity-0')
        }, 10);
        setTimeout(function () {
            $('#formEditPrestasi').children().eq(1).children().eq(1).submit()
        }, 800);
    })
})
// akhir js edit prestasi

// awal js edit publikasi
$('.editPublikasi').click(function () {
    $('body').prepend(`
    <div class="fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-40 font-paragraph" id='formEditPublikasi'>
        <div class="hidden opacity-0 duration-700 transition-all xl:w-1/2 lg:w-7/12 md:w-2/3 sm:w-3/4 w-11/12 bg-gray bg-opacity-0">
            <div class="bg-primary py-4 px-6 rounded-t-2xl flex items-center justify-between text-secondary text-2xl">
                <p class="font-heading font-bold">Edit Publikasi</p>
                <i class="closePublikasi fas fa-times cursor-pointer"></i>
            </div>
            <form action="" method="post" class="flex flex-col bg-gray-100 sm:px-12 px-4 rounded-b-2xl">
                <label for="editTopik" class="text-primary text-sm mt-4">Topik :</label>
                <input type="text" placeholder="Nama Lengkap" class="px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editTopik" id="editTopik">
                <label for="editPublisher" class="text-primary text-sm mt-3">Publisher :</label>
                <input type="text" placeholder="Nama Lengkap" class="px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editPublisher" id="editPublisher">
                <div class="flex">
                    <div class="flex flex-col mr-8 w-1/3">
                        <label for="editMasuk" class="text-primary text-sm mt-3">Tanggal Publikasi :</label>
                        <input type="date" placeholder="2021" class="cursor-pointer px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2" name="editMasuk" id="editMasuk">
                    </div>
                </div>
                <label for="editTulisan" class="text-primary text-sm mt-3">Deskripsi</label>
                <textarea name="editTulisan" id="editTulisan" rows="2" class="px-4 text-gray-400 text-sm border-2 rounded-lg border-gray-400 outline-none py-1 mt-2 resize-none" placeholder="Penggunaan Jutsu Air dalam mengatasi Permasalahan Banjir yang Sering Terjadi di Wilayah Pemukiman Rawan Longsor"></textarea>
                <div class="flex justify-end my-8">
                    <input type="submit" value="SIMPAN" class="bg-secondary text-white rounded-full w-24 py-0.5 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300 text-sm mr-4 outline-none">
                    <input type="button" value="KEMBALI" class="closePublikasi bg-secondary text-white rounded-full w-24 py-0.5 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300 text-sm outline-none" id='backPublikasi'>
                </div>

            </form>

        </div>
    </div>
`)

    $('#formEditPublikasi').children().first().removeClass('hidden')
    setTimeout(function () {
        $('#formEditPublikasi').children().first().removeClass('opacity-0')
    }, 10);

    $('.closePublikasi').click(function () {
        $('#formEditPublikasi').children().first().addClass('opacity-0')
        $('#formEditPublikasi').children().first().on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function () {
            $('#formEditPublikasi').children().first().addClass('hidden')
        });
        setTimeout(function () {
            $('#formEditPublikasi').remove()
        }, 400);
    })

    $('#backPublikasi').prev().click(function (e) {
        e.preventDefault()
        $('#formEditPublikasi').children().first().addClass('hidden')
        $('#formEditPublikasi').prepend(`
        <div class="hidden opacity-0 duration-700 transition-all p-3 rounded-lg flex items-center" style="background-color: #B1FF66;">
            <img src="/img/icon/check.png" class="h-5 mr-2" style="color: #54AC00;">
            <p class="sm:text-base text-sm font-heading font-bold" style="color: #54AC00;">Publikasi Berhasil Disimpan</p>
        </div>
        `)
        $('#formEditPublikasi').children().first().removeClass('hidden')
        setTimeout(function () {
            $('#formEditPublikasi').children().first().removeClass('opacity-0')
        }, 10);
        setTimeout(function () {
            $('#formEditPublikasi').children().eq(1).children().eq(1).submit()
        }, 700);
    })

})

// akhir js edit publikasi

// awal js edit akun
$('#submitAkun').click(function () {
    $('body').prepend(`
    <div class="fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-40" id='modalAkun'>
    <div class="hidden opacity-0 duration-700 transition-all p-3 rounded-lg flex items-center" style="background-color: #B1FF66;">
    <img src="/img/icon/check.png" class="h-5 mr-2" style="color: #54AC00;">
    <p class="sm:text-base text-sm font-heading font-bold" style="color: #54AC00;">Akun Berhasil Diperbarui</p>
</div>
    </div>
`)

    $('#modalAkun').children().first().removeClass('hidden')
    setTimeout(function () {
        $('#modalAkun').children().first().removeClass('opacity-0')
    }, 10);
})
// akhir js edit akun

// awal js edit biodata webservice
$('#simpanBiodata').click(function () {
    $('body').prepend(`
    <div class="fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-40" id='popupBiodata'>
    <div class="hidden opacity-0 duration-700 transition-all p-3 rounded-lg flex items-center" style="background-color: #B1FF66;">
    <img src="/img/icon/check.png" class="h-5 mr-2" style="color: #54AC00;">
    <p class="sm:text-base text-sm font-heading font-bold" style="color: #54AC00;">Biodata Berhasil Disimpan</p>
</div>
    </div>
`)

    $('#popupBiodata').children().first().removeClass('hidden')
    setTimeout(function () {
        $('#popupBiodata').children().first().removeClass('opacity-0')
    }, 10);
})
// akhir js edit biodata webservice
