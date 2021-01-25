<?= $this->extend('errors/template'); ?>

<?= $this->section('page-content'); ?>
<div class="">
  <!-- Main content -->
  <section class="content">
    <div class="error-page" style="margin-top:240px">
      <h2 class="headline text-danger">403</h2>

      <div class="error-content">
        <h3><i class="fas fa-exclamation-triangle text-danger"></i> Oops! Access Forbidden.</h3>
        <p>
          You do not have access to view this page.
          Meanwhile, You can <a href="<?= base_url('dashboard') ?>">return to dashboard</a>.
        </p>
      </div>
    </div>
    <!-- /.error-page -->

  </section>
  <!-- /.content -->
</div>
<?= $this->endSection(); ?>