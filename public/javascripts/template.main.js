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

$(window).on("scroll", function() {
	if (window.matchMedia("(min-width: 768px)").matches) {
		for (var i = 0; i < 4; i++) {
			$("#scroll-animation--container").append('<div class="scroll-animation--bubble x-grid-a nopad"></div>');
		}

		$("#scroll-animation--container").find('.scroll-animation--bubble').each(function() {
			var left = Math.floor(Math.random() * 101);
			var size = 5 + Math.floor(Math.random() * 11);
			var speed = 1 + Math.floor(Math.random() * 3);
			var blur = Math.floor(Math.random() * 5);
			
			var $this = $(this);
			
			$this.css({
				"left" : left + "%",
				"width" : size + "px",
				"height" : size + "px",
				"-webkit-filter" : "blur(" + blur  + "px)",
				"-moz-filter" : "blur(" + blur  + "px)",
				"-ms-filter" : "blur(" + blur  + "px)",
				"filter" : "blur(" + blur  + "px)",
			});

			$this.animate({"bottom": 120 - size, "opacity": 0}, speed * 1000);
			setTimeout(function() {
				$this.remove();
			}, speed * 1000);
		});
	}
});
