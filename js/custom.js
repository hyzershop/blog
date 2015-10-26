(function($) {

var mask_fouc = $(".js body").delay(800).animate({ opacity: "1" }, 300); // hiding the flash of un-styled content
$(document).ready(mask_fouc);

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
		marginTop: -(imgTop) + "px"
	});
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
	$(".home .has-post-thumbnail .cat-links").each(placeBlogIcons);
}, 1000);
$(window).resize(function() {
	$(".home .has-post-thumbnail .cat-links").each(placeBlogIcons);
});
function placeBlogIcons() {
	var $this = $(this);
	var topPos = (($this.parent(".entry-meta").siblings(".post-thumbnail").height()) / 2);
	
	if ($this.find("img").length === 0) { // if icon has not already been placed
		$this.find("a").hide();
		$this.parent(".entry-meta").css({
			top: topPos
		});
		if ($this.find("a").text().indexOf("Journal") > -1) {
			$this.append("<img src='/wp-content/uploads/journal-icon-white.png' width='70' height='52' alt='journal' style='margin-top:-26px;'/>");
		}
		if ($this.find("a").text().indexOf("Basics") > -1) {
			$this.append("<img src='/wp-content/uploads/basics-icon-white.png' width='70' height='52' alt='basics' style='margin-top:-26px;'/>");
		}
		if ($this.find("a").text().indexOf("Knowledge") > -1 && $this.find("a").text().indexOf("Basics") <= 0) {
			$this.append("<img src='/wp-content/uploads/knowledge-icon-white.png' width='70' height='52' alt='knowledge' style='margin-top:-26px;'/>");
		}
	} else { // if icon is already in place
		$this.parent(".entry-meta").css({
			top: topPos,
		});
	}
	
}

$(document).ready(function() {
	$("input[type='search']").attr("placeholder", "SEARCH THE HYZER BLOG");
	$(".search-toggle").click(function() {
		$(".search-form .search-field").focus();
	});
	$(document).click(function(event) {
		var target = $(event.target);
		if (target.hasClass("search-toggle") === false) {
			$(".search-form .search-field").focus();
		}
	});
});


})(jQuery);
