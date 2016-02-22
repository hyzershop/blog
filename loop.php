<?php if (have_posts()): while (have_posts()) : the_post(); ?>

	<!-- article -->
	<article id="post-<?php the_ID(); ?>" grid="true" <?php post_class(); ?>>
		<!-- post thumbnail -->
		<?php if ( has_post_thumbnail()) : // Check if thumbnail exists ?>
			<a class="post-thumbnail" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
				<?php 
					// $thumb = wp_get_attachment_image_src( get_post_thumbnail_id(the_ID()), 'post-thumbnail' );
					// $url = $thumb['0'];
				?>
				<!-- <img src="<?php echo $url; ?>" alt="<?php the_title(); ?>" /> -->
				<?php the_post_thumbnail(array(300,300)); // Declare pixel size you need inside the array ?>
			</a>
			<div class="post-category"><?php the_category( ' ' ); ?></div>
		<?php endif; ?>
		<!-- /post thumbnail -->

		<!-- post title -->
		<h2>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
		</h2>
		<!-- /post title -->

		<!-- post details -->
		<span>posted by </span><span class="author"><?php the_author_meta( 'nickname' ); ?></span>
		<span>on </span><span class="date"><?php the_time('F j, Y'); ?></span>
<!-- 		<span class="comments"><?php if (comments_open( get_the_ID() ) ) comments_popup_link( __( 'Leave your thoughts', 'html5blank' ), __( '1 Comment', 'html5blank' ), __( '% Comments', 'html5blank' )); ?></span>
 -->		<!-- /post details -->

<!--		<div class="excerpt"><?php html5wp_excerpt('html5wp_index'); // Build your custom callback length in functions.php ?></div>
-->
		<?php edit_post_link(); ?>

	</article>
	<!-- /article -->

<?php endwhile; ?>

<?php else: ?>

	<!-- article -->
	<article>
		<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
	</article>
	<!-- /article -->

<?php endif; ?>
