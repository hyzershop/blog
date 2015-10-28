<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

        
if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css' );
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css' );

// END ENQUEUE PARENT ACTION

// add homepage banner widget
function arphabet_widgets_init() {

	register_sidebar( array(
		'name'          => 'Home Page Banner',
		'id'            => 'home_page_banner',
		'before_widget' => '<div id="home-page-banner">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2>',
		'after_title'   => '</h2>',
	) );

}
add_action( 'widgets_init', 'arphabet_widgets_init' );

add_filter( 'grunion_contact_form_success_message', 'nmm_change_contact_form_success_message' );
function nmm_change_contact_form_success_message( $msg ) {
    global $contact_form_message;
    return "<h3 class='contact-success montserrat pink'>Thanks!</h3><h5 class='rocksalt white'>We'll be in touch soon.</h5>" . wp_kses( 
        $contact_form_message, 
        array( 'br' => array(), 'blockquote' => array() )
    );
}