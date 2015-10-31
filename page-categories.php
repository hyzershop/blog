<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section class="inner">

			<?php
			// get all the categories from the database
			$cats = get_categories(); 

				// loop through the categries
				foreach ($cats as $cat) {
					// setup the cateogory ID
					$cat_id= $cat->term_id;
					// Make a header for the cateogry
					echo "<h2>".$cat->name."</h2>";
					// create a custom wordpress query
					query_posts("cat=$cat_id&posts_per_page=100");
					// start the wordpress loop!
					if (have_posts()) : while (have_posts()) : the_post(); ?>

						<?php // create our link now that the post is setup ?>
						<a href="<?php the_permalink();?>"><?php the_title(); ?></a>
						<?php echo '<hr/>'; ?>

					<?php endwhile; endif; // done our wordpress loop. Will start again for each category ?>
				<?php } // done the foreach statement ?>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
