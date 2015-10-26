<?php

if ( function_exists('register_sidebar') ) {
	register_sidebar(array(
		'name' => 'Home Page Banner',
		'before_widget' => '<div id="homepage-banner-widget-container">',
		'after_widget' => '</div>',
		'before_title' => '<span style="display:none;">',
		'after_title' => '</span>',
		)
	);
}


?>