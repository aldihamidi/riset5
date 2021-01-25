<?= $this->extend('errors/template'); ?>

<?= $this->section('page-content'); ?>

<section class="content">
  <div class="error-page" style="margin-top:240px">
    <h2 class="headline text-danger"> 404</h2>

    <div class="error-content">
      <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

      <p>
        We couldn't find the page you were looking for. Meanwhile, you can <a href="<?= base_url('dashboard') ?>">return to dashboard</a>.
      </p>
    </div>
    <!-- /.error-content -->
  </div>
  <!-- /.error-page -->
</section>

<?= $this->endSection(); ?>