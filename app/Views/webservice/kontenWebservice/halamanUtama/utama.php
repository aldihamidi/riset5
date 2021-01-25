<?php
if ($login == 'sudah') {
    echo $this->extend('webservice/layoutWebservice/templateWebserviceLogin.php');
} else if ($login == 'belum') {
    echo $this->extend('webservice/layoutWebservice/templateWebservice.php');
}

echo $this->section('content');
?>

<div class="flex items-center my-20">
    <div class="mr-16 w-8/12">
        <h1 class="text-5xl font-heading text-secondary font-bold">PENJELASAN SINGKAT</h1>
        <p class="mt-8 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nesciunt illum molestiae dolores maxime placeat quae quod vitae, dolore voluptas impedit sit ullam maiores odio qui ipsum nostrum optio a quam, iste alias, et est. Molestias dolorum ut esse repudiandae sed dolore numquam quam eos, a suscipit nesciunt accusantium commodi quas excepturi eligendi velit nisi atque sit officiis quos soluta?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, iure praesentium error minus soluta harum! Itaque sunt, molestias nemo, repellat facilis sit maiores velit rem quidem, harum ratione maxime modi.</p>
    </div>
    <div class="w-4/12">
        <div class="flex flex-col">
            <img src="/img/logo api.png" alt="Logo Api" style="width: 450px;">
            <p class="m-auto text-secondary mt-4">Design by vectorjuice/Freepik</p>
        </div>
    </div>
</div>
<?= $this->endSection(); ?>
