<?php
/**
 * Mesquita Beauty Clinic — functions.php
 *
 * @package Mesquita_Beauty
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! function_exists( 'mesquita_setup' ) ) :
	function mesquita_setup() {
		// i18n
		load_theme_textdomain( 'mesquita-beauty', get_template_directory() . '/languages' );

		// Suportes nativos
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'custom-logo', array(
			'height'      => 80,
			'width'       => 240,
			'flex-height' => true,
			'flex-width'  => true,
		) );
		add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
		add_theme_support( 'responsive-embeds' );
		add_theme_support( 'align-wide' );

		// Menus
		register_nav_menus( array(
			'primary' => __( 'Menu Principal', 'mesquita-beauty' ),
			'footer'  => __( 'Menu Rodapé', 'mesquita-beauty' ),
		) );
	}
endif;
add_action( 'after_setup_theme', 'mesquita_setup' );

/**
 * Enqueue de estilos e scripts
 */
function mesquita_enqueue_assets() {
	// Google Fonts: Cormorant Garamond + Jost
	wp_enqueue_style(
		'mesquita-google-fonts',
		'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500&display=swap',
		array(),
		null
	);

	// Stylesheet principal do tema
	wp_enqueue_style(
		'mesquita-style',
		get_stylesheet_uri(),
		array( 'mesquita-google-fonts' ),
		wp_get_theme()->get( 'Version' )
	);

	// JS opcional
	wp_enqueue_script(
		'mesquita-main',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'mesquita_enqueue_assets' );

/**
 * Sidebars / Widget areas
 */
function mesquita_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Rodapé', 'mesquita-beauty' ),
		'id'            => 'footer-1',
		'before_widget' => '<div class="footer-widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h4>',
		'after_title'   => '</h4>',
	) );
}
add_action( 'widgets_init', 'mesquita_widgets_init' );

/**
 * Dados de contato centralizados (edite aqui)
 */
function mesquita_contact() {
	return array(
		'name'       => 'Sr & Sra Mesquita Beauty Clinic',
		'whatsapp'   => '5511917147633',
		'whatsapp_display' => '(11) 91714-7633',
		'instagram'  => 'https://www.instagram.com/srsramesquitabeautyclinic',
		'address'    => 'Rua Ezequiel Freire, 192 - Sala 906 - Santana - São Paulo - SP, CEP: 02034-000',
		'maps_url'   => 'https://www.google.com/maps/place/?q=place_id:ChIJB2YvNDv3zpQRScehZSCb9CA',
	);
}

/**
 * URL pronta do WhatsApp
 */
function mesquita_whatsapp_url( $message = '' ) {
	$c = mesquita_contact();
	$msg = $message ? '?text=' . rawurlencode( $message ) : '';
	return 'https://wa.me/' . $c['whatsapp'] . $msg;
}
