(function($) {

var mask_fouc = function() {
	$("body.home, body.archive").delay(800).animate({ opacity: "1" }, 300); // hiding the flash of un-styled content
}
$(window).load(mask_fouc);

$(".site-logo").attr("src", "http://blog.hyzershop.com/wp-content/uploads/hyzerblog-logo-643-102015.png");

// Fix for search bar bug in Gazette -- adds multiple "toggle" classes to #search-header when resizing
$(window).resize(function() {
	$("#search-header").attr("class", "search-header");
});

vAlignPostHero();
$(window).resize(vAlignPostHero);
function vAlignPostHero() {
	var postHero = $(".single .post-thumbnail img"),
		imgHeight = postHero.attr("height"),
		imgTop = imgHeight / 4;
	
	postHero.css({
		position: "relative",
		top: "50%",
		marginTop: -(imgTop) + "px",
		width: "100%",
	    maxWidth: "none",
	    left: "50%",
	    marginLeft: "-50%"
	}).parent(".post-thumbnail").css({
		"perspective": "500px"
	});
}

$(window).scroll(postHeroParallax);
function postHeroParallax() {
	var postHero = $(".single .post-thumbnail img"),
		scrollTop = $(document).scrollTop(),
		zTransform = scrollTop/6 + "px",
		blur = scrollTop/100 + "px",
		dissolve = 1 - (scrollTop/500);

	if (scrollTop < 400) {
		postHero.css({
			"-webkit-transform": "translateZ(" + zTransform + ")"
		//	, "-webkit-filter": "blur(" + blur + ")"
		});
	}
}
/*
var checkIfSliderLoaded = setInterval(function() {
	sliderText(vAlignBannerText, sliderStopChecking);
}, 200);

function sliderText(callback, stopfunc) {
	var hasStyle = $("#wds_container1_0 .wds_loading").attr("style");
	if (typeof hasStyle !== typeof undefined && hasStyle !== false) {
		var sliderText = $("<div id='slider-custom-text'></div>").html("<span class='hyzer-text'>hyzer</span><span class='blog-text'>blog</span>");
		sliderText.appendTo("#wds_container1_0").hide().css({height: 0, "overflow": "visible"}).delay(1400).fadeIn(800);
		callback();
		stopfunc();
		console.log("ran");
	} else {
		console.log("didnt run");
	}
}


function sliderStopChecking() {
	clearInterval(checkIfSliderLoaded);
}
*/

$(window).resize(vAlignBannerText);
function vAlignBannerText() {
	var sliderHeight = $("#wds_container1_0").outerHeight(),
	    textTop = -(sliderHeight * 0.61);
	$("#slider-custom-text").css({top: textTop});
}

setTimeout(function() {
	$(".home .has-post-thumbnail .cat-links, .search .has-post-thumbnail .cat-links").each(placeBlogIcons);
}, 1000);
$(window).resize(function() {
	$(".home .has-post-thumbnail .cat-links, .search .has-post-thumbnail .cat-links").each(placeBlogIcons);
});
function placeBlogIcons() {
	var $this = $(this);
	var topPos = (($this.parent(".entry-meta").siblings(".post-thumbnail").height()) / 3.5);
	
	if ($this.find("img").length === 0) { // if icon has not already been placed
		$this.parent(".entry-meta").css({
			top: topPos
		});

		if ($this.find("a").text().indexOf("Journal") > -1) {
			$this.html("").append("<img src='/wp-content/uploads/journal-icon-white.png' width='70' height='52' alt='journal' style='margin-top:-26px;'/>");
			return;
		}
		if ($this.find("a").text().indexOf("Basics") > -1) {
			$this.html("").append("<img src='/wp-content/uploads/basics-icon-white.png' width='70' height='52' alt='basics' style='margin-top:-26px;'/>");
			return;
		}
		if ($this.find("a").text().indexOf("Knowledge") > -1 && $this.find("a").text().indexOf("Basics") <= 0) {
			$this.html("").append("<img src='/wp-content/uploads/knowledge-icon-white.png' width='70' height='52' alt='knowledge' style='margin-top:-26px;'/>");
			return;
		}
	} else { // if icon is already in place
		$this.parent(".entry-meta").css({
			top: topPos
		});
	}
}

$(document).ready(function() {
//$(window).load(function() {
	$("body.category .hentry .entry-title").each(vAlignCategoryEntryTitle);
}).resize(function() {
	$("body.category .hentry .entry-title").each(vAlignCategoryEntryTitle);
});
function vAlignCategoryEntryTitle() {
	var $this = $(this);
	var topPos = -(($this.siblings(".post-thumbnail").height()) / 2);

	$this.css({
		top: topPos
	});
}


$(document).ready(function() {
	$("input[type='search']").attr("placeholder", "SEARCH THE HYZER BLOG");
	$(".search-toggle[aria-expanded='false']").click(function() {
		$(".search-form .search-field").focus();
	});
	$(document).click(function(event) {
		var target = $(event.target);
		if (target.hasClass("search-toggle") === false) {
			$(".search-form .search-field").focus();
		}
	});
	// $(document).on("blur",".search-form[aria-expanded='false'] .search-field",function() {
	// 	$(".search-toggle").click();
	// 	console.log("yay");
	// });
});

// Contact form "GO"
(function() {
	$("#contact-col form input[type='submit']").attr("value", "GO");
})();

$(document).ready(function() {
//$(window).load(function() {

fullScreenMenu();
$(window).resize(fullScreenMenu);
fullScreenSubMenu();

function fullScreenMenu() {
	// var $exitBtn = $("<div class='menu-exit'></div>");
	var	$mainMenu = $(".menu-main-menu-container");

//	$(window).resize(
		if ($(window).width() < 840) {
			$mainMenu.appendTo("body");
		} else {
			$mainMenu.show().appendTo("#site-navigation");
		}
//	});

	$(".menu-toggle").click(function() {
		var $this = $(this);

		if ( $this.attr("aria-expanded") == "true" ) {
			$mainMenu.fadeIn(300);
			$("html, body").css("overflow-y", "hidden");
		} else {
			$mainMenu.fadeOut(300);
			$("html, body").css("overflow-y", "scroll");
		}
	});
}

function fullScreenSubMenu() {
	var $exitBtn = $("<div class='sub-menu-exit'><img src='/wp-content/themes/gazette-child/images/exit-button.png' width='70' height='70' /></div>"),
		$mainNav = $(".main-navigation"),
		$subMenuParent = $("#primary-menu > li.menu-item-has-children");

	$("#primary-menu > li > ul").each(function() {
		var id = $(this).parent("li").attr("id"),
			subMenuClass = id + "-sub";
		$(this).addClass(subMenuClass + " submenu-expanded").appendTo("body");
	});

	$("#menu-item-17").click(function() {
		var $this = $(this),
			$subMenu = $(".menu-item-17-sub");

		if ( $this.hasClass("submenu-expanded") ) {
			subMenuOut();
		} else {
			subMenuIn();
		}

		$subMenu.children("li").each(function() {
			$(this).css({
				"opacity": "0",
				"position": "relative",
				"top": "20px"
			});
		});

		if ( !$subMenu.hasClass("hasexit") ) {
			$subMenu.addClass("hasexit")
				.prepend($exitBtn);
		}

		$("nav.toggled .menu-toggle").click(function() {
			console.log("clicked");
			$exitBtn.click();
		});
	});

	function subMenuIn() {
		var $subMenu = $(".menu-item-17-sub");
		$subMenu.fadeIn(300).children("li").each(function(index) {
			var $this = $(this),
				$delay = 300 + (index * 200);
			$this.delay($delay).animate({
				"top": "0px",
				"opacity": "1"
			}, 600, "easeOutQuad");
		});
		$("#menu-item-17").addClass("submenu-expanded");
	}

	function subMenuOut() {
		var $subMenu = $(".menu-item-17-sub");
		$subMenu.fadeOut(300).children("li").each(function(index) {
			var $this = $(this);
			$this.animate({
				"top": "20px",
				"opacity": "0"
			}, 200, "easeOutQuad");
		});
		$("#menu-item-17").removeClass("submenu-expanded");
	}

	$exitBtn.click(function() {
		subMenuOut();
	});
}
//});
});

$(".fullwidthimage").each(function() {
	$(this).parent("p").css("width:100%;");
});

$("blockquote.tweet").each(function(){
	var $this = $(this),
		content = $this.find("a").text(),
		contentString = content.replace(" ", "%20"),
		$url = "http://twitter.com/home?status=" + contentString,
		twitterButton = $("<div class='twitter-button'><a href target='_blank'></a></div>");
	twitterButton.find("a").attr("href", $url);

	if ($this.find("a").length > 0) {
		content = $this.find("a").text();
	}

	twitterButton.appendTo($this).show();

	$this.hover(function() {
		twitterButton.toggle();
	});
});

$(".main-navigation > div > ul li").each(function() {
	$(this).attr("tabindex", "0");
});

(function() {
	$("body.blog, body.archive").find(".hentry .entry-header").click(function() {
		$(this).find("a").click();
	});
})();

$(window).resize(function() {
	$("body").removeClass("search-toggled search-toggled search-toggled search-toggled search-toggled search-toggled search-toggled search-toggled search-toggled");
});

$(document).ready(function() {
	$(".single #jp-relatedposts").insertAfter(".entry-content");
});

/** FIND-REPLACE **/
// Remove "Category: "
$(document).ready(function() {
	$("body.category .page-title").each(function() {
		var categoryTitle = $(this).html();
		var newCatTitle = categoryTitle.replace("Category: ", "");
		$(this).html(newCatTitle);
	});
// Related posts -- remove "in"
	$(".jp-relatedposts-post-context").each(function() {
		var context = $(this).html();
		var newContext = context.replace("In ", "");
		$(this).html(newContext);
	});
});

})(jQuery);
