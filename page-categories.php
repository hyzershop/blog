<?php get_header(); ?>
<!-- BIG thank you to Wes Bos! http://wesbos.com/wordpress-list-posts-by-category/ -->
	<main role="main">
		<!-- section -->
		<section class="inner">

		<?php
		// get all the categories from the database
		$cats = get_categories(); 

		// loop through the categries
		foreach ($cats as $cat):
			// setup the cateogory ID
			$cat_id= $cat->term_id; ?>
		
			<a href="<?php echo get_category_link( $cat->cat_ID ); ?>">
			<article grid class="<?php echo $cat->slug; ?>">
				<?php
					// Make a header for the cateogry
					echo '<img src="/wp-content/themes/hyzer-blog/images/' . $cat->slug . '-icon-white.png" alt="' . $cat->name . '" />';
					// create a custom wordpress query
					query_posts("cat=$cat_id&posts_per_page=100");
					// start the wordpress loop!
					if (have_posts()) : while (have_posts()) : the_post(); ?>

						<!-- 
<?php // create our link now that the post is setup ?>
						<a href="<?php the_permalink();?>"><?php the_title(); ?></a>
 -->

					<?php endwhile; endif; // done our wordpress loop. Will start again for each category ?>
			</article>
			</a>
		
		<?php endforeach; ?>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
