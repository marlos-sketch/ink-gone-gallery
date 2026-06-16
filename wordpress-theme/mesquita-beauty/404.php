<?php
/**
 * Página 404
 * @package Mesquita_Beauty
 */
get_header(); ?>

<section class="container" style="text-align:center; padding:120px 0;">
	<h1>404</h1>
	<p><?php esc_html_e( 'A página que você procura não foi encontrada.', 'mesquita-beauty' ); ?></p>
	<a class="btn btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>">
		<?php esc_html_e( 'Voltar ao início', 'mesquita-beauty' ); ?>
	</a>
</section>

<?php get_footer();
