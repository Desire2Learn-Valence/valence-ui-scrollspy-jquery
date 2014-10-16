var bower = require( 'gulp-bower' ),
	gulp = require( 'gulp' ),
	jshint = require( 'gulp-jshint' ),
	vui = require( 'vui-helpers' );

gulp.task( 'lib', function() {
	return bower( 'lib/' );
} );

gulp.task( 'jshint', function() {
	return gulp.src( ['gulpfile.js', 'scroll-spy.js', 'test/unit/*.js'] )
		.pipe( jshint() )
		.pipe( jshint.reporter( 'default' ) );
} );

gulp.task( 'test', [ 'lib' ], function () {
	return vui.test( {
		files: [
			'lib/jquery/jquery.min.js',
			'lib/jquery.ui/ui/jquery.ui.core.js',
			'lib//jquery.ui/ui/jquery.ui.widget.js',
			'test/unit/**/*Spec.js'
		],
		preprocessors: {
			'scroll-spy.js': [ 'coverage' ]
		}
	} ) ;
} );

gulp.task( 'default', function() {
	gulp.start( 'jshint' );
} );