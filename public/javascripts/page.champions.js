$(document).ready(function() {
	$.ajax({
		url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=a3c3bdb7-aa73-4302-9b4d-1185cd461e7d"
	}).then(function(completeData) {
		for (champion in completeData["data"]) {
			// Necessary variables from CompleteData
			var version = completeData["version"];
			var champ_name = completeData["data"][champion]["name"];
			var image_name = completeData["data"][champion]["image"]["full"];

			// Champ image URL
			var image_url = "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/champion/" + image_name;

			$("#champions_container").append(
				"<div class='champ_holder x-grid-6 s-grid-4 m-grid-3 l-grid-2 nopad'>" +
					"<img class='x-grid-10 x-grid-offset-1' src='" + image_url + "'>" +
					"<div class='x-grid-10 x-grid-offset-1'>" + champ_name + "</div>" +
				"</div>"
			);
		}
	});
});