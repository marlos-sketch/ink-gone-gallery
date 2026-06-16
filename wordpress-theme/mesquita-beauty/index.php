<?php
/**
 * Template padrão (fallback) — lista de posts
 * @package Mesquita_Beauty
 */
get_header(); ?>

<section class="container">
	<h1><?php single_post_title(); ?></h1>

	<?php if ( have_posts() ) : ?>
		<div class="grid">
			<?php while ( have_posts() ) : the_post(); ?>
				<article <?php post_class( 'card' ); ?>>
					<?php if ( has_post_thumbnail() ) : ?>
						<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'medium_large' ); ?></a>
					<?php endif; ?>
					<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
					<p><?php echo esc_html( get_the_excerpt() ); ?></p>
					<a class="btn btn-outline" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Ler mais', 'mesquita-beauty' ); ?></a>
				</article>
			<?php endwhile; ?>
		</div>

		<div style="text-align:center; margin-top:40px;">
			<?php the_posts_pagination(); ?>
		</div>
	<?php else : ?>
		<p><?php esc_html_e( 'Nenhum conteúdo encontrado.', 'mesquita-beauty' ); ?></p>
	<?php endif; ?>
</section>

<?php get_footer();
