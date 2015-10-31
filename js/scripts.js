(function($) {
$(document).ready(function() {

	$("body").delay(1000).animate({
		opacity: 1
	}, 500);

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

	$(window).resize(vAlignLargeImages);
	setTimeout(function() {
		vAlignLargeImages();
	}, 1000);
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

	$(window).resize(categoryIcons);
	setTimeout(function() {
		categoryIcons();
	}, 1000);

	function categoryIcons() {
		$(".home article[grid='true'], .search article[grid='true']").each(function() {
			var $this = $(this),
				thumb = $this.children(".post-thumbnail"),
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

			if ($this.hasClass("category-lab")) {
				$theCategory = "lab";
			}

			if ($this.hasClass("category-thoughts")) {
				$theCategory = "thoughts";
			}

			postCategory.css({
				top: -thumbHeight + "px"
			}).children("a").css({
				display: "block",
				height: thumbHeight + "px",
				backgroundImage: "url(/wp-content/themes/hyzer-blog/images/" + $theCategory + "-icon-white.png)"
			});
		});
	}



	$(".view-article").each(function() {
		$(this).text("Keep Reading");
	});


});



$(document).ready(function() {

	var mainMenu = $(".wrapper > header > nav > ul").addClass("main-menu"),
		subMenu = $(".wrapper > header > nav > ul .sub-menu"),
		mainMenuToggle = $("<div id='menu-toggle' data-menu-expanded='false'></div>").appendTo("body"),
		subMenuParent = $("header > .nav li.menu-item-has-children"),
		subMenuExit = $("<div class='sub-menu-exit'><img src='/wp-content/themes/gazette-child/images/exit-button.png' width='70' height='70' /></div>");

	subMenu.hide();
	mainMenuToggle.appendTo("body");
	subMenuExit.appendTo("body").hide();

	function menuHide(menu, button) {
		setTimeout(function() {
			menu.hide();
			button.removeClass("expanded");
		}, 100);
	}

	function menuShow(menu, button) {
		setTimeout(function() {
			menu.fadeIn();
			button.addClass("expanded");
		}, 100);
	}

	if ($(window).width() < 840) {
		menuHide(mainMenu, mainMenuToggle);
	}

	$(window).resize(function() {
		if ($(window).width() < 840) {
			menuHide(mainMenu, mainMenuToggle);
			menuHide(subMenu, subMenuExit);
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
		menuShow(subMenu, $this);
		subMenuExit.show();
	});

	subMenuExit.click(function() {
		var $this = $(this);
		menuHide(subMenu, $this);
		$this.hide();
		if ($(window).width() < 840) {
			mainMenuToggle.click();
		}
	});

	$(".menu-item-17.expanded").click(function() {
		menuHide(subMenu, $this);
	});







	// fullScreenSubMenu();
	// $(window).resize(fullScreenSubMenu);

	// function fullScreenSubMenu() {
	// 	var $exitBtn = $("<div class='sub-menu-exit'><img src='/wp-content/themes/gazette-child/images/exit-button.png' width='70' height='70' /></div>"),
	// 		$subMenu = $(".sub-menu").hide(),
	// 		$subMenuParent = $("header > .nav li.menu-item-has-children");

	// 	$("header > .nav li ul").each(function() {
	// 		var id = $(this).parent("li").attr("id"),
	// 			subMenuClass = id + "-sub";
	// 		$(this).addClass(subMenuClass + " sub-menu-expanded");
	// 	});

	// 	$subMenuParent.click(function() {
	// 		var $this = $(this);
		
	// 		$subMenu = $this.find(".sub-menu").show();

	// 		if ( $this.hasClass("sub-menu-expanded") ) {
	// 			subMenuOut();
	// 		} else {
	// 			subMenuIn();
	// 		}

	// 		$subMenu.children("li").each(function() {
	// 			$(this).css({
	// 				"opacity": "0",
	// 				"position": "relative",
	// 				"top": "20px"
	// 			});
	// 		});

	// 		if ( !$subMenu.hasClass("hasexit") ) {
	// 			$subMenu.addClass("hasexit")
	// 				.append($exitBtn);
	// 		}

	// 		$("#menu-toggle.expanded").click(function() {
	// 			$exitBtn.click();
	// 		});
	// 	});

	// 	function subMenuIn() {
	// 		var $subMenu = $(".menu-item-17-sub");
	// 		$subMenu.fadeIn(300).children("li").each(function(index) {
	// 			var $this = $(this),
	// 				$delay = 300 + (index * 200);
	// 			$this.delay($delay).animate({
	// 				"top": "0px",
	// 				"opacity": "1"
	// 			}, 600, "easeOutQuad");
	// 		});
	// 		$subMenuParent.addClass("sub-menu-expanded");
	// 	}

	// 	function subMenuOut() {
	// 		var $subMenu = $(".menu-item-17-sub");
	// 		$subMenu.fadeOut(300).children("li").each(function(index) {
	// 			var $this = $(this);
	// 			$this.animate({
	// 				"top": "20px",
	// 				"opacity": "0"
	// 			}, 200, "easeOutQuad");
	// 		});
	// 		$subMenuParent.removeClass("sub-menu-expanded");
	// 	}

	// 	$exitBtn.click(function() {
	// 		subMenuOut();
	// 	});
	// }

	$(window).scroll(function() {
		parallax('.flexslider .slides li div > img');
	});
	function parallax(a) {
		var plxImg = $(a),
			scrollTop = $(document).scrollTop(),
			zTransform = scrollTop/6 + "px",
			yTransform = scrollTop/7 + "px";

		plxImg.parent().css({
			"perspective": "200px"
		});

		if (scrollTop < 600) {
			TweenLite.to(plxImg, 0.1, {
			//	"-webkit-transform": "translateZ(" + zTransform + ")",
				"-webkit-transform": "translateY(" + yTransform + ")"
			//	, "-webkit-filter": "blur(" + blur + ")"
			});
		}
	}




	$("article[grid] .post-thumbnail").each(function() {
		var $this = $(this),
			$width = $this.width(),
			$maxHeight = $width/1.5;
		$this.css({"height": $maxHeight});
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
});


})(jQuery);