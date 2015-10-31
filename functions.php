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

if ( !function_exists( 'chld_thm_cfg_child_css' ) ):
    function chld_thm_cfg_child_css() {
        wp_enqueue_style( 'chld_thm_cfg_child', get_stylesheet_uri() ); 
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_child_css', 999 );

// END ENQUEUE PARENT ACTION

function hyzerblog_scripts_method() {
	wp_enqueue_script(
		'scripts',
		get_stylesheet_directory_uri() . '/js/scripts.js',
		array( 'jquery' )
	);
}
add_action( 'wp_enqueue_scripts', 'hyzerblog_scripts_method' );

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
    return "<h3 class='contact-success montserrat pink'>Thanks!</h3><h5 class='rocksalt blue'>We'll be in touch soon.</h5>" . wp_kses( 
        $contact_form_message, 
        array( 'br' => array(), 'blockquote' => array() )
    );
}

// If Dynamic Sidebar Exists
if (function_exists('register_sidebar'))
{
    // Define Sidebar Widget Area 1
    register_sidebar(array(
        'name' => __('Header Widgets', 'html5blank'),
        'description' => __('Specifically for the main navigation search bar', 'html5blank'),
        'id' => 'header_widget_area',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));

    // Define Sidebar Widget Area 2
    register_sidebar(array(
        'name' => __('Footer Widgets', 'html5blank'),
        'description' => __('Footer widgets', 'html5blank'),
        'id' => 'footer_widget_area',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));
}
