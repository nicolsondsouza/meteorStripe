Package.describe({
  summary: "Nicolson Metronics Package"
});

Npm.depends({
    "stripe" : "2.4.4",
    // 'paypal-rest-sdk': '0.6.3',
});

Package.on_use(function (api) {
	api.add_files(['server.js'], 'server');	
	api.add_files('stripe.js', 'client');
 //    api.add_files('assets/plugins/jquery-1.10.2.min.js', 'client');
	// api.add_files('assets/plugins/jquery-migrate-1.2.1.min.js', 'client');
	// api.add_files('assets/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js', 'client');
	// api.add_files('assets/plugins/bootstrap/js/bootstrap.min.js', 'client');
	// api.add_files('assets/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js', 'client');
	// api.add_files('assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js', 'client');	
	// api.add_files('assets/plugins/jquery.blockui.min.js', 'client');
	// api.add_files('assets/plugins/jquery.cokie.min.js', 'client');
	// api.add_files('assets/plugins/uniform/jquery.uniform.min.js', 'client');
	// api.add_files('assets/plugins/jqvmap/jqvmap/jquery.vmap.js', 'client');
	// api.add_files('assets/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js', 'client');
	// api.add_files('assets/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js', 'client');
	// api.add_files('assets/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js', 'client');
	// api.add_files('assets/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js', 'client');
	// api.add_files('assets/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js', 'client');
	// api.add_files('assets/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js', 'client');
	// api.add_files('assets/plugins/flot/jquery.flot.min.js', 'client');
	// api.add_files('assets/plugins/flot/jquery.flot.resize.min.js', 'client');
	// api.add_files('assets/plugins/flot/jquery.flot.categories.min.js', 'client');
	// api.add_files('assets/plugins/jquery.pulsate.min.js', 'client');
	// api.add_files('assets/plugins/bootstrap-daterangepicker/moment.min.js', 'client');
	// api.add_files('assets/plugins/bootstrap-daterangepicker/daterangepicker.js', 'client');
	// api.add_files('assets/plugins/gritter/js/jquery.gritter.js', 'client');
	// api.add_files('assets/plugins/fullcalendar/fullcalendar/fullcalendar.min.js', 'client');
	// api.add_files('assets/plugins/jquery-easy-pie-chart/jquery.easy-pie-chart.js', 'client');
	// api.add_files('assets/scripts/core/app.js', 'client');
	// api.add_files('assets/scripts/custom/index.js', 'client');
	// api.add_files('assets/scripts/custom/tasks.js', 'client');
	// api.add_files('assets/plugins/jquery.sparkline.min.js', 'client');

	// api.add_files('assets/plugins/font-awesome/css/font-awesome.min.css', 'client');
	// api.add_files('assets/plugins/bootstrap/css/bootstrap.min.css', 'client');
	// api.add_files('assets/plugins/uniform/css/uniform.default.css', 'client');
	// api.add_files('assets/plugins/gritter/css/jquery.gritter.css', 'client');
	// api.add_files('assets/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css', 'client');
	// api.add_files('assets/plugins/fullcalendar/fullcalendar/fullcalendar.css', 'client');
	// api.add_files('assets/plugins/jqvmap/jqvmap/jqvmap.css', 'client');
	// api.add_files('assets/plugins/jquery-easy-pie-chart/jquery.easy-pie-chart.css', 'client');
	// api.add_files('assets/css/style-metronic.css', 'client');
	// api.add_files('assets/css/style.css', 'client');
	// api.add_files('assets/css/style-responsive.css', 'client');
	// api.add_files('assets/css/plugins.css', 'client');
	// api.add_files('assets/css/pages/tasks.css', 'client');
	// api.add_files('assets/css/themes/default.css', 'client');
	// api.add_files('assets/css/print.css', 'client');
	// api.add_files('assets/css/custom.css', 'client');
	// api.add_files('', 'client');

	  if(api.export){
		api.export("stripe","server");
		// api.export("paypal","server");
	  }
});

