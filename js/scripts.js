(function($) {
$(document).ready(function() {

	$("body").delay(1000).css({
		opacity: 1
	});

	var searchForm = $("header .widget_search > form");

	$(document).click(function(e) {
		var $this = $(this),
			target = $(e.target);

		if ( !target.hasClass("search-expanded") && target.hasClass("search") ) {
			target.addClass("search-expanded");
			searchForm.find(".search-input").focus();
		}

		if ( target.hasClass("search-submit") === false && !target.is("input") && target.hasClass("search") === false && searchForm.hasClass("search-expanded") === true ) {
			searchForm.removeClass("search-expanded");
		}
	}).keydown(function(e) {
		if (e.keyCode === 27) {
			searchForm.removeClass("search-expanded");
		}
	});

	vAlignLargeImages();
	setTimeout(function() {
		vAlignLargeImages();
	}, 2000);
	$(window).resize(vAlignLargeImages);
	$(window).load(vAlignLargeImages);
	function vAlignLargeImages() {
		var largeImg = $(".single .post-thumbnail img, .flexslider .slides img");
		
		largeImg.each(function() {
			var $this = $(this),
				imgHeight = $this.height(),
				containerHeight = $this.parent().height(),
				imgTop = (-imgHeight / 2) + (containerHeight / 2);

			console.log(containerHeight + "; " + imgHeight);

			$(this).css({
				position: "relative",
				top: imgTop + "px"
				// width: "100%",
			 //    maxWidth: "none",
			 //    left: "50%",
			 //    marginLeft: "-50%"
			// }).parent(".post-thumbnail").css({
			// 	"perspective": "500px"
			});
		});
	}

	$(window).resize(alignPostHeader);
	setTimeout(function() {
		alignPostHeader();
	}, 1000);

	function alignPostHeader() {
		var postHeader = $(".single .post-header"),
			topPos = -(postHeader.find(".post-header-inner").outerHeight());

		postHeader.css({
			top: topPos
		});
	}

	$(window).resize(stylePostsGrid);
	setTimeout(function() {
		stylePostsGrid();
	}, 1000);

	function stylePostsGrid() {
		$("article[grid]").each(function() {
			var $this = $(this),
				thumb = $this.children(".post-thumbnail"),
				thumbImgSrc = thumb.find("img").attr("src"),
				postLink = thumb.attr("href"),
				postCategory = $this.children(".post-category"),
				thumbHeight = thumb.height(),
				$theCategory;

			$this.find(".post-category > a").text("").attr("href", postLink);

			if ($this.hasClass("category-basics")) {
				$theCategory = "basics";
			}

			if ($this.hasClass("category-academy")) {
				$theCategory = "academy";
			}

			if ($this.hasClass("category-videos")) {
				$theCategory = "videos";
			}

			if ($this.hasClass("category-thoughts")) {
				$theCategory = "thoughts";
			}

			if ($this.hasClass("category-lab")) {
				$theCategory = "lab";
			}

			if ($this.hasClass("category-review")) {
				$theCategory = "review";
			}

			if ( $this.hasClass("has-post-thumbnail") ) {
				var articleInner = $("<div class='article-grid-inner'></div>").css({
					backgroundImage: "url(/wp-content/themes/hyzer-blog/images/" + $theCategory + "-icon-white.png)"
				});
				if ( $("body").hasClass("category") ) {
					articleInner.css({
						backgroundImage: "none",
						"padding": "7em 4em"
					});
				}

				if ( !$(this).hasClass("wrapped-inner") ) {
					$(this).wrapInner(articleInner).addClass("wrapped-inner");
					$this.css({
						backgroundImage: "url(" + thumbImgSrc +")"
					});
				}

				thumb.hide();

				// postCategory.css({
				// 	top: -thumbHeight + "px"
				// }).children("a:first-child").css({
				// 	display: "block",
				// 	height: thumbHeight + "px",
				// 	backgroundImage: "url(/wp-content/themes/hyzer-blog/images/" + $theCategory + "-icon-white.png)"
				// });
			} 
			// else {
			// 	$this.css({
			// 		backgroundImage: "url(/wp-content/themes/hyzer-blog/images/" + $theCategory + "-icon-white.png)"
			// 	});
			// }
		});
	}

	$("article[grid]").click(function() {
		var link = $(this).find("h2 a"),
			linkurl = link.attr("href");
		window.location.assign(linkurl);
	});

	$(".view-article").each(function() {
		$(this).text("Keep Reading");
	});

	$("#contact-col form input[type='submit']").attr("value", "go");


});



$(document).ready(function() {

	var mainMenu = $(".wrapper > header > nav > ul").addClass("main-menu"),
		subMenu = $(".wrapper > header > nav > ul > li > .sub-menu"),
		mainMenuToggle = $("<div id='menu-toggle' data-menu-expanded='false'></div>").appendTo("body > .wrapper"),
		subMenuParent = $("header > .nav li.menu-item-has-children"),
		subMenuExit = $("<div class='sub-menu-exit'><img src='/wp-content/themes/gazette-child/images/exit-button.png' width='70' height='70' /></div>");

	subMenu.hide();
	mainMenuToggle.appendTo("body > .wrapper");
	subMenuExit.appendTo("body > .wrapper").hide();

	function menuHide(menu, button) {
		setTimeout(function() {
			menu.hide();
			button.removeClass("expanded");
		}, 100);
		$("body > .wrapper").css({"overflow": "scroll"});
		subMenuExit.fadeOut();
	}

	function menuShow(menu, button) {
		setTimeout(function() {
			menu.fadeIn();
			button.addClass("expanded");
		}, 100);
		$("body > .wrapper").css({"overflow": "hidden"});
	}

	if ($(window).width() < 840) {
		menuHide(mainMenu, mainMenuToggle);
	}

	$(window).resize(function() {
		if ($(window).width() < 840) {
			menuHide(mainMenu, mainMenuToggle);
		} else {
			menuShow(mainMenu, mainMenuToggle);
			menuHide(subMenu, subMenuParent);
		}
	});

	mainMenuToggle.click(function() {
		var $this = $(this);
		if ( $this.hasClass("expanded") === true && $(window).width() < 840 ) {
			menuHide(mainMenu, $this);
		}
		if ( $this.hasClass("expanded") === false && $(window).width() < 840 ) {
			menuShow(mainMenu, $this);
		}
	});

	subMenuParent.click(function() {
		var $this = $(this);
		if ( !$this.children("a").next(".sub-menu").is(":visible") ) {
			menuShow(subMenu, $this);
			subMenuExit.fadeIn();
		} else {
			menuHide(subMenu, $this);
			subMenuExit.fadeOut();
		}
	});

	subMenuExit.click(function() {
		var $this = $(this);
		menuHide(subMenu, $this);
		$this.hide();
		if ($(window).width() < 840) {
			mainMenuToggle.click();
		}
	});

	/** Category icons in submenu **/
	$("header > .nav > ul > li > .sub-menu > li > a").each(function() {
		var strippedURL = $(this).attr("href").replace("http://blog.hyzershop.com/category/", ""),
			category = strippedURL.replace("/", ""),
			id = $(this).parent("li").attr("id");
		$("head").append("<style>header > .nav > ul > li > .sub-menu > li#" + id + " > a::before { background-image: url('/wp-content/themes/hyzer-blog/images/" + category + "-icon-white.png'); }</style>");
	});


/** PARALLAX **/
	$(window).scroll(function() {
		$('.flexslider .slides li.flex-active-slide div > img').each(function() {
			parallax($(this));
		});
	});
	function parallax(a) {
		var plxImg = $(a),
			scrollTop = $(document).scrollTop(),
		//	zTransform = scrollTop/10 + "px",
			zTransform = 0,
			yTransform = scrollTop/7 + "px";

		plxImg.parent().css({
			"perspective": "200px"
		});

		if (scrollTop < 600) {
			TweenLite.to(plxImg, 0.1, {
				"-webkit-transform": "translate3d(0px," + yTransform + "," + zTransform + ")"
			//	, "-webkit-filter": "blur(" + blur + ")"
			});
		}
	}

/** SIZE GRID IMAGES
	$(window).resize(sizePostThumbnails);
	sizePostThumbnails();
	function sizePostThumbnails() {
		$("article[grid] .post-thumbnail").each(function() {
			var $this = $(this),
				$width = $this.width(),
				$maxHeight = $width/1.5;
			$this.css({"max-height": $maxHeight});
		});
	}
 **/





	$(window).load(function() {
		if ($(window).width() > 960) {
		// MAILCHIMP EMAIL ONLY FORM
			var signupTopExit = $("<div class='exit'>x</div>");
			var mc_email_only = $(".mc_embed_signup.top");
			$(".mc_embed_signup.top").append(signupTopExit);
			// Dropdown email signup
			mc_email_only.hide().css({
				position: "fixed",
				zIndex: 20,
				top: 0,
				left: 0,
				width: "100%",
			});
			$(window).scroll(function() {
				if ( $(document).scrollTop() > 1000 ) {
					mc_email_only.slideDown(400);
				} else {
					mc_email_only.slideUp(400);
				}
			});
			signupTopExit.click(function() {
				mc_email_only.hide().addClass("hide-always");
			});
		}
	});



});

/** FIND-REPLACE **/
// Remove "Category: "
$(document).ready(function() {
	$("body.category h1").each(function() {
		var categoryTitle = $(this).html();
		var newCatTitle = categoryTitle.replace("Categories for ", "");
		$(this).html(newCatTitle);
	});
// Related posts -- remove "in"
	$(".jp-relatedposts-post-context").each(function() {
		var context = $(this).html();
		var newContext = context.replace("In ", "");
		$(this).html(newContext);
	});

	$(".comment-form-comment").find("label").hide()
	.siblings("textarea#comment").attr("placeholder", "Write a comment. It's cool, we won't bite.");

	$(".post-category a").each(function() {
		if ( $(this).attr("href").indexOf("home-page-featured") > -1 ) {
			$(this).hide();
		}
	});
});


/** CATEGORY FILTER **/
$(document).ready(function() {
	$("body.home, body.archive").find("article").each(function() {
		if ( $(this).hasClass("category-series") ) {
			$(this).hide();
		}
	});
});

// $(window).load(function() {
// 	$("*").each(function() {
// 		var width = $(this).width();
// 		var c = $(this).attr("class");
// 		if (width > $(window).width() ) {
// 			console.log(c + "(" + width + ") | " );
// 		}
// 	});
// });


$(document).ready(function() {
	$(".next-post").each(function() {
		var social = $(this).siblings(".sharedaddy");
		$(this).insertBefore(social);
	});
});

$(document).ready(function() {
	$(".post-content-inner blockquote").each(function() {
		var $this = $(this),
			twitterBtn = $("<img src='/wp-content/themes/hyzer-blog/images/twitter-circle-icon.png' alt='Tweet this!' width='60' height='60' />");
		$this.prepend(twitterBtn);

		twitterBtn.click(function() {
			var text = $this.text(),
				textStr = text.replace(" ", "%20"),
				currentUrl = window.location.href,
				currentUrlStr = currentUrl.replace(" ", "%20").replace("/", "%2F").replace(":", "%3A");
				tweetUrl = "https://twitter.com/intent/tweet?text=" + textStr + "&url=" + currentUrlStr + "&hashtags=discgolf,hyzerblog&via=hyzer_shop";
			
			window.open(tweetUrl,"_blank");
		}).hover(function() {
			$(this).siblings("p").toggleClass("twitter-blue");
		});
	});
});




})(jQuery);