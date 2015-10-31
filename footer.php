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
		<!-- /wrapper -->

		<?php wp_footer(); ?>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
