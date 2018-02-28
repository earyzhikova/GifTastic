var celebrities = ["Bill Murray", "Adam Sandler", "Angelina Jolie", "Tom Hanks", "Rashida Jones", "Nicolas Cage", "Jackie Chan", "Silvester Stallone", "Emma Stone"];
// // initial array of celebrities

//Page Ready Function
$(function() {
    renderButtons();
    // console.log("page ready");
});

function renderButtons() {

    // Delete the buttons prior to adding new movies
    $("#data-celebtrities").empty();

    // Loop through the array of names
    for (var i = 0; i < celebrities.length; i++) {

        //  generate buttons for each name in the array
        
        var a = $("<button>");
        // Adding a class of names to our button
        a.addClass("images imageCelebButton");
        // Add a data-attribute
        a.attr("data-name", celebrities[i]);
        // a.attr("id", "data-celebtrities-button")
        // Provide the initial button text
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

           

function displayInfo(celebrityName) {
    $(".imagesArea").empty();
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
        .then(function(response) {
        	for(var i = 0; i < response.data.length; i++) {
        		var celebrityDiv = $("<div>");
        		var p = $("<p>").text("Rating:" + response.data[i].rating);
        		var celebrityImage = $("<img>");
                // <img>
                celebrityImage.attr("data-still", response.data[i].images.fixed_height_still.url);
                celebrityImage.attr("data-animate", response.data[i].images.fixed_height.url);
        		celebrityImage.attr("src", response.data[i].images.fixed_height_still.url);
                // <img src="giphy.com/picture/wofij2398f23f9.gif" isStill='true'>
                celebrityDiv.append(p);
                celebrityImage.attr("isStill", true);
               	celebrityDiv.prepend(celebrityImage);
                $(".imagesArea").append(celebrityDiv);



        	}

           });
}

$(document).on('click', '.imageCelebButton', function() {
    console.log("button clicked");
    // which button to click
    var x = $(this).attr("data-name");
   
   
    displayInfo(x);
});


   $(".imagesArea").on('click','img',function(){
        console.log("image click");
        var dataStill = $(this).attr("isStill");
        //If is still then swap to animated
        if(dataStill === "true") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("isStill", false);
        //else it is animated, swap to still
        }else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("isStill", true);
        }
    });
    
       // http://api.giphy.com/v1/gifs/search?q=""&api_key=8BRi8Mur7x5UXHkxRh2ZfTVqOjpspRfl&limit=10