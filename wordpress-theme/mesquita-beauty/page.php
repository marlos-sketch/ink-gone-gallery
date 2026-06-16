<?php
/**
 * Template padrão de páginas
 * @package Mesquita_Beauty
 */
get_header(); ?>

<section class="container">
	<?php while ( have_posts() ) : the_post(); ?>
		<article <?php post_class(); ?>>
			<h1><?php the_title(); ?></h1>
			<?php if ( has_post_thumbnail() ) the_post_thumbnail( 'large', array( 'style' => 'margin:24px 0;border-radius:6px;' ) ); ?>
			<div class="entry-content"><?php the_content(); ?></div>
		</article>
	<?php endwhile; ?>
</section>

<?php get_footer();
