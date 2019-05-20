$(document).ready(function () {//I need jquery to run!

	var searchTerms = ['Broad City', 'Game Of Thrones', 'Mad Men', 'Greys Anatomy'];
	console.log("testing...");

	var createButton = function (name) {
		var button = $('<button>');
		button.text(name);
		button.click(function () {
			gifQuery($(this).text());

		})
		$('.button-container').append(button);
	}

	var createButtonsFromArr = function (arr) {
		for (var i = 0; i < arr.length; i++) {
			createButton(arr[i]);
		}

	}

	var gifQuery = function (term) {
		var apiKey = "lGrsxp8P15M96FdeFE7w9zMmmmbvJHaA";
		var queryURL = "http://api.giphy.com/v1/gifs/search?apiKey="
			+ apiKey
			+ "&q=" + term;
		console.log(queryURL);
		$.ajax({
			method: "GET",
			url: queryURL,
		}).then(function (result) {
			var url = result.data[Math.floor(Math.random() * 23)].images.fixed_width.url;
			var gif = $('<img>')
			gif.attr("src", url);
			// for loop for more images
			$(".gifs").append(gif);



		});
	}
	// gifQuery("TV Shows");

	createButtonsFromArr(searchTerms);

	$("#search-button").on('click', function () {
		// targeting
		var searchTerm = $("#search-field").val();
		console.log(searchTerm);
		gifQuery(searchTerm);


	})
})