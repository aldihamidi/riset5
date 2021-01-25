<?php

namespace App\Controllers;

class Websia extends BaseController
{
    public function index()
    {
        // ganti login ='sudah' atau 'belum' sesuai keadaan sudah login atau belum
        $data['judulHalaman'] = 'Beranda WEBSIA';
        $data['login'] = 'sudah';
        return view('websia/kontenWebsia/halamanUtama/beranda', $data);
    }

    public function searchAndFilter()
    {
        $data['judulHalaman'] = 'Search And Filter';
        return view('websia/kontenWebsia/searchAndFilter/searchAndFilter', $data);
    }

    public function profil()
    {
        // ganti status ='user' atau 'bukan user' sesuai pengakses, user itu untuk melihat profil diri sendiri, sedangkan bukan user untuk melihat profil orang lain
        $data['status'] = 'user';
        $data['judulHalaman'] = 'User Profile';
        return view('websia/kontenWebsia/userProfile/userProfile', $data);
    }

    public function rekomendasi()
    {
        $data['judulHalaman'] = 'Rekomendasi';
        return view('websia/kontenWebsia/userProfile/rekomendasi', $data);
    }

    public function galeriFoto()
    {
        $data['judulHalaman'] = 'Galeri Kenangan Alumni';
        return view('websia/kontenWebsia/galeri/galeriAlumni', $data);
    }

    public function galeriVideo()
    {
        $data['judulHalaman'] = 'Galeri Video Kegiatan Alumni';
        $data['login'] = 'sudah';
        return view('kontenWebsia/galeri/galeriVidAlumni', $data);
    }

    public function galeriWisuda()
    {
        $data['judulHalaman'] = 'Galeri Video Wisuda';
        $data['login'] = 'sudah';
        return view('kontenWebsia/galeri/galeriWisuda', $data);
    }

    public function coba()
    {
        return view('cobaWebsia/map');
    }
}
