<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/output.css">
    <link rel="stylesheet" href="/css/add_style.css">
    <link rel="stylesheet" href="/css/scrollbar.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title><?= $judul; ?></title>
</head>

<body class="flex min-h-screen flex-col w-screen overflow-x-hidden font-paragraph">
    <!-- HEADER -->
    <div id="navbar">
        <div class="bg-primary py-8 px-12 w-full">
            <div class="lingkaran-luar" id="kiri">
                <div class="lingkaran-dalam"></div>
            </div>
            <div class="flex justify-between">
                <div class="font-heading flex items-center gap-x-6 z-50">
                    <a href="<?= base_url(); ?>">
                        <img src="/img/logoSIA.png" class="z-50 md:w-16 w-10" alt="">
                    </a>
                    <h1 class="text-white text-2xl font-light relative z-10">WEB SERVICE SISTEM INFORMASI ALUMNI</h1>
                </div>
                <div id="nav" class="hidden md:flex md:items-center">
                    <ul class="flex gap-x-6 relative z-10">
                        <a href="<?= base_url(); ?>">
                            <li class="bg-secondary text-white py-2 px-3 rounded-full w-24 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300">SIA</li>
                        </a>
                        <li id="nav-li" class="bg-secondary rounded-full text-white py-2 px-3 w-24 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300">API <i class="fa fa-caret-down"></i>
                            <ul class="hidden absolute transform -translate-x-4 translate-y-2 bg-secondary text-white w-24 py-2 px-3 border-secondary border-2 w-max rounded-xl">
                                <a href="/webservice/">
                                    <li class="hover:text-secondary hover:bg-white -mt-2 -mx-3 hover:border-opacity-70 rounded-t-xl hover:bg-white py-2 px-3 text-left border-b-2 border-gray-500 transiton duration-300">BERANDA</li>
                                </a>
                                <a href="/webservice/dokumentasi">
                                    <li class="hover:text-secondary hover:bg-white -mx-3 hover:border-opacity-70 hover:bg-white py-2 px-3 text-left border-b-2 border-gray-500 transiton duration-300">DOKUMENTASI</li>
                                </a>
                                <a href="#">
                                    <li class="hover:text-secondary rounded-b-xl hover:bg-white hover:border-opacity-70 hover:bg-white py-2 px-3 text-left -mb-2 -mx-3 transiton duration-300">PROYEK</li>
                                </a>
                            </ul>
                        </li>
                        <a href="">
                            <li class="bg-secondary text-white py-2 px-3 rounded-full w-24 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300">PROFIL</li>
                        </a>
                        <a href="/logout">
                            <li class="bg-secondary text-white py-2 px-3 rounded-full w-24 text-center cursor-pointer border-secondary border-2 hover:text-secondary hover:bg-white hover:border-opacity-70 transition-colors duration-300">KELUAR</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="lingkaran-luar" id="kanan">
                <div class="lingkaran-dalam"></div>
            </div>
        </div>
    </div>
    <!-- END HEADER -->

    <!-- CONTENT PAGE DI SINI -->
    <div class="w-full px-24 flex flex-1">
        <?= $this->renderSection('content'); ?>
    </div>
    <!-- END CONTENT PAGE -->

    <!-- FOOTER -->
    <div class="bg-primary w-full mt-6 pt-6 pb-3 px-12">
        <div>
            <div class="flex justify-around">
                <div class="flex gap-x-4 items-center">
                    <a href="https://stis.ac.id/"><img class="w-24 h-24" src="/img/STISlogo.png" alt=""></a>
                    <div class="text-white font-heading">
                        <h3>Jalan Otto Iskandardinatta</h3>
                        <h3>64C Jakarta 13330</h3>
                        <h3>08967xxxxx</h3>
                        <div class="flex gap-x-2 mt-2">
                            <a href="https://www.facebook.com/PolstatSTIS/"><img class="h-6" src="/img/facebook.png" alt=""></a>
                            <a href="https://www.youtube.com/channel/UCwmpr4lmrApoGRpq4TcmsvA"><img class="h-6" src="/img/youtube.png" alt=""></a>
                            <a href="https://twitter.com/stisjkt"><img class="h-6" src="/img/twitter.png" alt=""></a>
                            <a href="https://www.instagram.com/polstatstis/"><img class="h-6" src="/img/instagram.png" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <a href="https://haisstis.org/"><img class="h-28" src="/img/logo_haisstis.png" alt=""></a>
                    <div class="text-white font-heading">
                        <h3>Jalan Otto Iskandardinatta</h3>
                        <h3>64C Jakarta 13330</h3>
                        <h3>08967xxxxx</h3>
                        <div class="flex gap-x-2 mt-2">
                            <a href=""><img class="h-6" src="/img/facebook.png" alt=""></a>
                            <a href=""><img class="h-6" src="/img/youtube.png" alt=""></a>
                            <a href="https://twitter.com/haisstis"><img class="h-6" src="/img/twitter.png" alt=""></a>
                            <a href=""><img class="h-6" src="/img/instagram.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="text-white mt-2 border-2">
            <h2 class="text-white text-center mt-3">Copyright &copy; PKL 60 Riset 5</h2>
        </div>
    </div>
    <!-- END FOOTER -->
</body>

</html>