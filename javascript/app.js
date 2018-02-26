
// // initial array of celebrities
var celebrities = ["Bill Murray", "Adam Sandler", "Angelina Jolie", "Tom Hanks", "Rashida Jones", "Nicolas Cage", "Jackie Chan", "Silvester Stallone", "Emma Stone", "Jackie Chan"];

//Page Ready Function
$(function(){
	renderButtons();
	console.log("page ready");
});

function renderButtons() {

    // Deleting the buttons prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#button").empty();

    // Looping through the array of movies
    for (var i = 0; i < celebrities.length; i++) {

      // Then dynamically generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie to our button
      a.addClass("images");
      // Adding a data-attribute
      a.attr("data-name", celebrities[i]);
      a.attr("id","celebrity-button")
      // Providing the initial button text
      a.text(celebrities[i]);
      // Adding the button to the buttons-view div
      $("#button").append(a);
    }
}



// // URL   https://giphy.com/categories/celebrities?api_key=8BRi8Mur7x5UXHkxRh2ZfTVqOjpspRfl

function displayInfo() {

var gueryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=8BRi8Mur7x5UXHkxRh2ZfTVqOjpspRfl&limit=10";
$.ajax({url: queryURL, method: "GET"})
.done(function(response) {
	console.log(response);
});
}

$('#celebrity-button').on("click", function(event) {
	console.log("button clicked");
	// which button to click
	var x = $(this).attr("data-name");
	console.log(x);
})

// // http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YOUR_API_KEY