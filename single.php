<?php get_header(); ?>

	<main role="main">
	<!-- section -->
	<section>

	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<!-- article -->
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<!-- post thumbnail -->
			<?php if ( has_post_thumbnail()) : // Check if Thumbnail exists ?>
				<div class="post-thumbnail post-hero">
					<?php the_post_thumbnail(); // Fullsize image for the single post ?>
				</div>
			<?php endif; ?>
			<!-- /post thumbnail -->

			<!-- post header -->
			<div class="post-header">
				<div class="inner post-header-inner">
					<!-- post title -->
					<h1 class="post-title">
						<?php the_title(); ?>
					</h1>
					<!-- /post title -->

					<!-- post details -->
					<?php 
					$email = get_the_author_meta( user_email );
					echo get_avatar($email);
					?>
					<!-- post details -->
					<span>posted by </span><span class="author"><?php the_author_meta( 'nickname' ); ?></span>
					<span>on </span><span class="date"><?php the_time('F j, Y'); ?></span>
					<!--<span class="comments"><?php // if (comments_open( get_the_ID() ) ) comments_popup_link( __( 'Leave your thoughts', 'html5blank' ), __( '1 Comment', 'html5blank' ), __( '% Comments', 'html5blank' )); ?></span>-->
					<!-- /post details -->
				</div>
			</div><!-- /post header -->

			<div class="inner post-content-inner">
				<?php the_content(); // Dynamic Content ?>
			</div>

			<div class="post-after inner">
				<?php the_tags( __( 'Tags: ', 'html5blank' ), ', ', '<br>'); // Separated by commas with a line break at the end ?>

				<p><?php _e( '', 'html5blank' ); the_category(', '); // Separated by commas ?></p>

				<?php edit_post_link(); // Always handy to have Edit Post Links available ?>

				<?php comments_template(); ?>
			</div>

		</article>
		<!-- /article -->

	<div class="next-post"><?php next_post_link( '%link', 'Next post in category', TRUE ); ?></div>

	<?php endwhile; ?>

	<?php else: ?>

		<!-- article -->
		<article>

			<h1><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h1>

		</article>
		<!-- /article -->

	<?php endif; ?>

	</section>
	<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
