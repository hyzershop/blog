			<!-- footer -->
			<footer id="site-footer" class="footer" role="contentinfo">
				<!-- inner -->
				<div class="inner footer-inner">

					<?php if ( is_active_sidebar( 'footer_widget_area' ) ) : dynamic_sidebar( 'footer_widget_area' ); ?>
					<?php endif; ?>

				</div>
				<!-- /inner -->

				<!-- copyright -->
				<p class="copyright">
					&copy; <?php echo date('Y'); ?> Hyzer Shop, LLC. All rights reserved. Oh yeah, and we developed this awesome site ourselves. Bam.
				</p>
				<!-- /copyright -->
			</footer>
			<!-- /footer -->
		</div>

		<div class="mc_embed_signup top"><form action="//hyzershop.us10.list-manage.com/subscribe/post?u=c294e1f306a856df1d2ffaee5&amp;id=e402d02301" method="post" class="mc-embedded-subscribe-form validate" name="mc-embedded-subscribe-form" target="_blank" novalidate><div class="mc_embed_signup_scroll"><label for="mce-EMAIL">Get it delivered</label><input type="email" name="EMAIL" class="email mce-EMAIL" placeholder="email address" required><div style="position: absolute; left: -5000px;"><input type="text" name="b_c294e1f306a856df1d2ffaee5_e402d02301" tabindex="-1" value=""></div><input type="submit" value="Subscribe" name="subscribe" class="mc-embedded-subscribe button"></div></form></div>
		<!-- /wrapper -->

		<?php wp_footer(); ?>

		<!-- analytics -->
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-69062205-2', 'auto');
		  ga('send', 'pageview');

		</script>

	</body>
</html>
