<?php
/**
 * Cabeçalho do tema
 * @package Mesquita_Beauty
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
	<div class="container">
		<div class="site-branding">
			<?php if ( has_custom_logo() ) : the_custom_logo(); else : ?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
			<?php endif; ?>
		</div>

		<nav class="main-nav" aria-label="<?php esc_attr_e( 'Navegação principal', 'mesquita-beauty' ); ?>">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'fallback_cb'    => function() {
					echo '<ul>';
					echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Início', 'mesquita-beauty' ) . '</a></li>';
					echo '<li><a href="#procedimentos">' . esc_html__( 'Procedimentos', 'mesquita-beauty' ) . '</a></li>';
					echo '<li><a href="#resultados">' . esc_html__( 'Resultados', 'mesquita-beauty' ) . '</a></li>';
					echo '<li><a href="#contato">' . esc_html__( 'Contato', 'mesquita-beauty' ) . '</a></li>';
					echo '</ul>';
				},
			) );
			?>
		</nav>
	</div>
</header>

<main id="main" class="site-main">
