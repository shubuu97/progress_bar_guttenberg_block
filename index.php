<?php
/**
 * Plugin name: Progress Bar
 * Description: This will show a progress bar
 * Version: 1.0.0
 * Author : Shubham Chitransh
 *
 * @package progress-bar
 */

 function progress_bar() {
	// Register script
    wp_enqueue_script(
        'progress_bar_editor_script',
        plugins_url('build/index.js', __FILE__),
        array( 'wp-blocks', 'wp-block-editor', 'wp-i18n', 'wp-components', 'wp-compose' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js')
	);

	// Enqueue Front-end style
	wp_enqueue_style(
		'progress_bar_style',
		plugins_url( 'src/style.css', __FILE__),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/style.css' )
	);

 }

 add_action( 'enqueue_block_assets', 'progress_bar' );
