// Display the Header Text
var current_title_letter = 0;
var banner_title = "Dancer's Alley";

var current_info_letter = 0;
var banner_info = "“ I believe we all have a dancer within ourselves and that dance is an art form of truth and expression. " +
				  "An education creates space that allows the dancer to truly feel the beauty inside oneself, " +
				  "and that inner beauty creates an ease of movement and self confidence in our daily lives. " +
				  "Transfer that to the stage and the audience is treated to a captivating performance! ”";

function displayBannerTitle() {
	if (banner_title.length >= current_title_letter) {
		$("#home-banner--title").append(banner_title.charAt(current_title_letter));
		current_title_letter++;
		setTimeout(displayBannerTitle, 100);
	}
	else {
		setTimeout(displayBannerInfo, 500);
	}
}

function displayBannerInfo() {
	bannerTextFromTop();
	if (banner_info.length >= current_info_letter) {
		$("#home-banner--info").append(banner_info.charAt(current_info_letter));
		current_info_letter++;
		setTimeout(displayBannerInfo, 25);
	}
}

if (window.matchMedia("(min-width: 768px)").matches) setTimeout(displayBannerTitle, 500);
else {
	$("#home-banner--title").text(banner_title);
	$("#home-banner--info").text(banner_info);
}

//Center the Header Text vertically
function bannerTextFromTop() {
	var container_height = $("#home-banner").outerHeight();
	var text_height = $("#home-banner--text").outerHeight();
	var text_margin = (container_height / 2) - (text_height / 2);
	$("#home-banner--text").css("margin-top", text_margin);
}

$(window).on("resize load", bannerTextFromTop);

//Make Nav Bar Fixed/Relative
$(window).on("scroll", function() {
	var fromTop = $("html").scrollTop();
	var banner = $("#home-banner").height();
	if (fromTop > banner) {
		$("#header").css({
			"position" : "fixed",
			"border-bottom" : "5px solid white"
		});
	}
	else {
		$("#header").css({
			"position" : "relative",
			"border-bottom" : "0px"
		});
	}
});

$("#header").css("position","relative");
$("#content").css("margin-top","0px");