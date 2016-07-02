$("#header-mobile--menu").click(function() {
	$("#header-mobile--item--holder").toggle();
	if ($("#header-mobile--item--holder").is(":visible"))
		$("#header-socialnetworking--holder-mobile").css("margin-top","262px");
	else
		$("#header-socialnetworking--holder-mobile").css("margin-top","54px");
});

function wrapperCenter() {
	if (window.matchMedia("(min-width: 2000px)").matches) {
		var window_width = $(window).width();
		$("#wrapper").css("left", (window_width - 2000) / 2);
	}
}

$(window).on("resize load", wrapperCenter);

$(window).on("scroll", function() {
	var fromTop = $(window).scrollTop();
	var headerHeight;
	if (window.matchMedia("(max-width: 767px)").matches)
		headerHeight = $("#header-mobile").height()
	else
		headerHeight = $("#header").height()
	if (fromTop > headerHeight) $("#backToTop").css("display","block");
	else $("#backToTop").css("display","none");
});

function scrollToTop() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
}