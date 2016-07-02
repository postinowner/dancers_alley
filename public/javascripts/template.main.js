$("#header-mobile--menu").click(function() {
	$("#header-mobile--item--holder").toggle();
});

function wrapperCenter() {
	if (window.matchMedia("(min-width: 2000px)").matches) {
		var window_width = $(window).width();
		$("#wrapper").css("left", (window_width - 2000) / 2);
	}
}

$(window).on("resize load", wrapperCenter);