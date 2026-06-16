<?php
/**
 * Template para post individual
 * @package Mesquita_Beauty
 */
get_header(); ?>

<section class="container">
	<?php while ( have_posts() ) : the_post(); ?>
		<article <?php post_class(); ?>>
			<h1><?php the_title(); ?></h1>
			<p style="font-size:.85rem; color:var(--color-muted);">
				<?php echo esc_html( get_the_date() ); ?> &middot; <?php the_author(); ?>
			</p>
			<?php if ( has_post_thumbnail() ) the_post_thumbnail( 'large', array( 'style' => 'margin:24px 0;border-radius:6px;' ) ); ?>
			<div class="entry-content"><?php the_content(); ?></div>
		</article>

		<?php if ( comments_open() || get_comments_number() ) comments_template(); ?>
	<?php endwhile; ?>
</section>

<?php get_footer();
