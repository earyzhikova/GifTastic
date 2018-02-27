var celebrities = ["Bill Murray", "Adam Sandler", "Angelina Jolie", "Tom Hanks", "Rashida Jones", "Nicolas Cage", "Jackie Chan", "Silvester Stallone", "Emma Stone", "Jackie Chan"];
// // initial array of celebrities

//Page Ready Function
$(function() {
    renderButtons();
    console.log("page ready");
});

function renderButtons() {

    // Delete the buttons prior to adding new movies
    $("#data-celebtrities").empty();

    // Looping through the array of names
    for (var i = 0; i < celebrities.length; i++) {

        //  generate buttons for each name in the array
        
        var a = $("<button>");
        // Adding a class of names to our button
        a.addClass("images");
        // Adding a data-attribute
        a.attr("data-name", celebrities[i]);
        a.attr("id", "data-celebtrities-button")
        // Providing the initial button text
        a.text(celebrities[i]);
        // Adding the button 
        $("#data-celebtrities").append(a);
    }
}

        $("#add-celeb").on("click", function(event){
            event.preventDefault();

            var celeb = $("#celeb-input").val().trim();
            celebrities.push(celeb);
            renderButtons();
            $("#celeb-input").val("");



        });

            // renderButtons();

// // URL   https://giphy.com/categories/celebrities?api_key=8BRi8Mur7x5UXHkxRh2ZfTVqOjpspRfl

function displayInfo(celebrityName) {

	var arrayCeleb = celebrityName.split("");
    for(i = 0; i < arrayCeleb.length; i++) {
        if(arrayCeleb[i] === " ") {
            arrayCeleb[i] = '+';

        }

    }
    var celebQuery = arrayCeleb.join("")
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + celebQuery + "&api_key=8BRi8Mur7x5UXHkxRh2ZfTVqOjpspRfl&limit=10";
   console.log(queryURL);
    $.ajax({url: queryURL, method: "GET" })
        .done(function(response) {
        	for(var i = 0; i < response.data.length; i++) {
        		var celebrityDiv = $("<div>");
        		var p = $("<p>").text("Rating:" + response.data[i].rating);
        		var celebrityImage = $("<img>");
        		celebrityImage.attr("src", response.data[i].images.fixed_height_still.url);
                celebrityDiv.append(p);
               	celebrityDiv.prepend(celebrityImage);
                
        		$(".imagesArea").append(celebrityDiv);



        	}

           });
}

$(document).on('click', '#data-celebtrities-button', function() {
    console.log("button clicked");
    // which button to click
    var x = $(this).attr("data-name");
    console.log(x);
    displayInfo(x);
})

       // http://api.giphy.com/v1/gifs/search?q=""&api_key=8BRi8Mur7x5UXHkxRh2ZfTVqOjpspRfl&limit=10