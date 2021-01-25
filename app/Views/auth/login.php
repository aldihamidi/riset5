<?= $this->extend('auth/templates/index'); ?>
<?= $this->section('content'); ?>

<?php
$visibility = 'hidden'; // bisa diisi hidden untuk menonaktifkan
?>
<!-- konten  -->
<div class="flex flex-col justify-center flex-grow">
    <div class="block md:flex mx-auto w-11/12 ">

        <div class="bg-cover bg-center w-1/2" style="background-image: url(/img/illus-02-02.png)"></div>

        <div class="flex flex-col flex-grow items-center py-5 px-1 bg-white shadow-2xl rounded-xl md:-ml-2">
            <div class="font-bold font-sans text-xl mb-8 mt-5"> LOGIN USER</div>

            <!-- tulisan kalo akun yang dimasukkan salah untuk saat ini masih ke hidden, untuk mennonaktifkan bisa mengisi 'hidden' pada variabel visibility di text php -->
            <div class=" w-11/12 md:w-9/12 mb-2 text-center text-sm md:text-base bg-red-200 text-red-600 font-semibold p-1 rounded-lg <?= $visibility ?>">Username/password was wrong!</div>
            <!-- tulisan kalo akun yang dimasukkan salah -->

            <?= view('Myth\Auth\Views\_message_block') ?>

            <form action="<?= route_to('login') ?>" class="flex flex-col items-center w-full" method="POST">
                <?= csrf_field() ?>
                <!-- email or username -->
                <?php if ($config->validFields === ['email']) : ?>
                    <div class="flex w-11/12 md:w-9/12 mb-4 ">
                        <label for="login" class="my-auto"><?= lang('Auth.email') ?>:</label>
                        <div class="flex-grow ml-4 ">
                            <input type="email" name="login" id="username" placeholder="<?= lang('Auth.email') ?>" autocomplete="off" class="shadow-md border-2 w-full h-10 rounded-lg px-3 py-2 focus:outline-none border-gray-200 focus:border-gray-700 placeholder-gray-700 text-sm align-middle <?php if (session('errors.login')) : ?>is-invalid<?php endif ?>">
                        </div>
                    </div>
                    <div class="invalid-feedback">
                        <?= session('errors.login') ?>
                    </div>
                <?php else : ?>
                    <div class="flex w-11/12 md:w-9/12 mb-4 ">
                        <label for="login" class="my-auto"><?= lang('Auth.emailOrUsername') ?>:</label>
                        <div class="flex-grow ml-4 ">
                            <input type="text" name="login" id="username" placeholder="<?= lang('Auth.emailOrUsername') ?>" autocomplete="off" class="shadow-md border-2 w-full h-10 rounded-lg px-3 py-2 focus:outline-none border-gray-200 focus:border-gray-700 placeholder-gray-700 text-sm align-middle">
                        </div>
                    </div>
                    <div class="invalid-feedback">
                        <?= session('errors.login') ?>
                    </div>
                <?php endif; ?>
                <!-- email or username -->

                <!-- password  -->
                <div class="flex w-11/12 md:w-9/12 mb-4 ">
                    <label for="password" class="my-auto"><?= lang('Auth.password') ?>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                    <div class="flex-grow ml-4 ">
                        <input type="password" name="password" id="password" placeholder="<?= lang('Auth.password') ?>" autocomplete="off" class="shadow-md border-2 w-full h-10 rounded-lg px-3 py-2 focus:outline-none border-gray-200 focus:border-gray-700 placeholder-gray-700 text-sm align-middle <?php if (session('errors.password')) : ?>is-invalid<?php endif ?>">
                    </div>
                </div>
                <div class="invalid-feedback">
                    <?= session('errors.password') ?>
                </div>
                <!-- password  -->

                <!-- Remember Me -->
                <?php if ($config->allowRemembering) : ?>
                    <div class="flex w-11/12 md:w-9/12 mb-4 ">
                        <div class="w-20 "></div>
                        <div class="flex flex-grow ml-4 ">
                            <input type="checkbox" name="remember" id="rememberMe" class="my-auto<?php if (old('remember')) : ?> checked <?php endif ?>">
                            <label for="rememberMe" class="ml-3 text-sm"><?= lang('Auth.rememberMe') ?></label>
                        </div>
                    </div>
                <?php endif; ?>
                <!-- Remember Me -->

                <!-- submit + forgot your password -->
                <div class="flex w-11/12 md:w-9/12 mb-4 ">
                    <div class=" w-20 "></div>
                    <div class="flex flex-grow ml-2 justify-between">
                        <button type="submit" id="submit" class="text-xs my-auto text-white font-bold hover:from-blue-500 hover:to-indigo-600 py-2 px-10cursor-pointer focus:outline-none bg-gradient-to-r from-blue-500 to-indigo-500 py-2 px-8 ml-4 rounded-md"><?= lang('Auth.loginAction') ?></button>
                        <?php if ($config->activeResetter) : ?>
                            <div class="text-blue-500 my-auto mr-2 ml-1 text-sm"> <a href="<?= route_to('forgot') ?>">Forgot your password?</a>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
                <!-- submit + forgot your password -->

            </form>

            <div class="flex w-11/12 md:w-9/12 justify-center mb-4 ">
                <div class="flex-grow my-auto">
                    <hr class="bg-gray-500">
                </div>
                <div class="mx-6 text-lg">ATAU</div>
                <div class="flex-grow my-auto">
                    <hr class="bg-gray-500">
                </div>
            </div>

            <!-- login with sipadu -->
            <button onclick="loginSipadu()">
                <div class=" flex py-2 px-6 border-2 border-blue-500 rounded-lg mb-4 hover:border-blue-700 hover:bg-blue-100">
                    <img src="/img/logo.png" alt="" class="w-6 h-6">
                    <div class="ml-2 my-auto text-blue-500 hover:text-blue-700 font-semibold"> Login with SIPADU</div>
                </div>
            </button>

            <script>
                function loginSipadu() {
                    var win = window.open(`http://localhost:8080/auth/sipadu`, "_blank", "height=700,width=550,status=no,titlebar=no,menubar=no,top=10,left=300", true);
                    var timer = setInterval(function() {
                        if (win.closed) {
                            clearInterval(timer);
                            if (document.cookie.includes('login=yes'))
                                location.reload();
                        }
                    }, 1000);
                }
            </script>
            <!-- login with sipadu -->

            <!-- login with BPS -->
            <button onclick="loginBPS()">
                <div class=" flex py-2 px-6 border-2 border-blue-500 rounded-lg hover:border-blue-700 hover:bg-blue-100">
                    <img src="/img/bps.png" alt="" class="w-6 h-6">
                    <div class="ml-2 my-auto text-blue-500 hover:text-blue-700 font-semibold"> Login with SSOBPS</div>
                </div>
            </button>

            <script>
                function loginBPS() {
                    var win = window.open(`http://localhost:8080/auth/bps`, "_blank", "height=700,width=900,status=no,titlebar=no,menubar=no,top=10,left=300", true);
                    var timer = setInterval(function() {
                        if (win.closed) {
                            clearInterval(timer);
                            if (document.cookie.includes('login=yes'))
                                location.reload();
                        }
                    }, 1000);
                }
            </script>
            <!-- login with BPS -->


        </div>
    </div>
</div>
<!-- konten -->
<?= $this->endSection(); ?>