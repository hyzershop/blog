<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>

			<?php if ( is_active_sidebar( 'home_page_banner' ) ) : dynamic_sidebar( 'home_page_banner' ); ?>
			<?php endif; ?>
		<div class="inner grid-inner">
			<?php get_template_part('loop'); ?>
		</div>

			<?php get_template_part('pagination'); ?>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
