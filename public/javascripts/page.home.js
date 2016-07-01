function displayBannerText() {
	var phrase = banner_phrases[banner_current_phrase];
	if (phrase.length >= banner_current) {
		$banner_text.append(phrase.charAt(banner_current));
		banner_current++;
		setTimeout(displayBannerText, 110);
	}
	else {
		banner_current = 0;
		setTimeout(hideBannerText, 1500);
	}
}

function hideBannerText() {
	$banner_text.animate({"opacity": 0}, 800);
	if ((banner_phrases.length - 1) > banner_current_phrase) banner_current_phrase++
	else banner_current_phrase = 0
	setTimeout(function() {
		$banner_text.css("opacity", 1).html("");
		bannerTextFromTop();
		displayBannerText();
	}, 1200);
}

$banner_text = $("#banner-main--text");
$banner_text.css("color","#3F68AF");

banner_current = 0;
banner_current_phrase = 0;
banner_phrases = Array("League Hub", "Summoners", "Champions", "Live Games", "Tournaments", "Leaderboards");

setTimeout(displayBannerText, 500);

function setHomePageHeaderColor() {
	$("#header").css("background", "#3F68AF");
}

$(document).ready(setHomePageHeaderColor);