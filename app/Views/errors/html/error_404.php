<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Page Not Found</title>

	<!-- Google Font: Source Sans Pro -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="<?= base_url() ?>/vendor/AdminLTE/plugins/fontawesome-free/css/all.min.css">
	<!-- Theme style -->
	<link rel="stylesheet" href="<?= base_url() ?>/vendor/AdminLTE/dist/css/adminlte.min.css">

	<!-- Bootstrap 4 -->
	<script src="<?= base_url() ?>/vendor/AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

</head>

<body class="hold-transition sidebar-mini layout-fixed">
	<div class="wrapper">
		<!-- Begin Page Content -->
		<section class="content">
			<div class="error-page" style="margin-top:240px">
				<h2 class="headline text-danger"> 404</h2>
				<div class="error-content">
					<h3><i class="fas fa-exclamation-triangle text-danger"></i> <span>Oops ! something went wrong.</span></h3>
					<p>
						<?php if (!empty($message) && $message !== '(null)') : ?>
							<?= esc($message) ?>.
							Meanwhile, you can <a href="<?= base_url('dashboard') ?>">return to dashboard</a>.
						<?php else : ?>
							Sorry! Cannot seem to find the page you were looking for. Meanwhile, you can <a href="<?= base_url('dashboard') ?>">return to dashboard</a>.
						<?php endif ?>
					</p>
				</div>
				<!-- /.error-content -->
			</div>
			<!-- /.error-page -->
		</section>
		<!-- /.container-fluid -->
		<!-- Control Sidebar -->
		<aside class="control-sidebar control-sidebar-dark">
			<!-- Control sidebar content goes here -->
		</aside>
		<!-- /.control-sidebar -->
	</div>
	<!-- ./wrapper -->
</body>

</html>