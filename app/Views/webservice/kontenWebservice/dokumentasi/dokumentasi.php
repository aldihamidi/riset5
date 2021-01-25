<?= $this->extend('webservice/layoutWebservice/templateWebserviceLogin.php'); ?>

<?= $this->section('content'); ?>
<div class="grid grid-cols-3 gap-x-16">
    <div class="col-span-1 mt-8">
        <div class="w-full flex items-center">
            <input type="text" name="pencarian" id="pencarian" placeholder="Pencarian..." class="border-2 border-gray-300 rounded-lg px-3 py-2 w-full">
            <button><i class="fa fa-search fa-lg text-gray-500 ml-3 hover:text-gray-800"></i></button>
        </div>
        <hr class="border-gray-300 mt-2">
        <ul class="mt-4 font-heading text-secondary text-2xl">
            <li class="mt-2 font-bold"><a href="#judul1">Judul 1</a>
                <ul class="ml-4 mt-2 text-black text-xl font-paragraph font-bold">
                    <li><a href="#sub11">Subjudul 1.1</a></li>
                    <li><a href="#sub12">Subjudul 1.2</a></li>
                </ul>
            </li>
            <li class="mt-2 font-bold"><a href="#judul2">Judul 2</a>
                <ul class="ml-4 mt-2 text-black text-xl font-paragraph font-bold">
                    <li><a href="#sub21">Subjudul 2.1</a></li>
                    <li><a href="#sub22">Subjudul 2.2</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="col-span-2 mt-8">
        <h1 class="text-6xl text-center font-heading text-secondary font-bold">DOKUMENTASI</h1>
        <h2 class="text-2xl text-secondary mt-4 font-heading font-bold" id="judul1">Judul 1</h2>
        <div class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
        <h3 class="text-xl mt-4 font-bold" id="sub11">Subjudul 1.1</h3>
        <div class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.
        </div>
        <h3 class="text-xl mt-4 font-bold" id="sub12">Subjudul 1.2</h3>
        <div class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <h2 class="text-2xl text-secondary mt-4 font-heading font-bold" id="judul2">Judul 2</h2>
        <div class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
        <h3 class="text-xl mt-4 font-bold" id="sub21">Subjudul 2.1</h3>
        <div class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.
        </div>
        <h3 class="text-xl mt-4 font-bold" id="sub22">Subjudul 2.2</h3>
        <div class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    </div>
</div>
<?= $this->endSection(); ?>
