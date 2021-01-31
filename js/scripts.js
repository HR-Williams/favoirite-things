$(document).ready(function() {

  $("#favoriteThings").submit(function(event) {

    let food = $("#food").val();
    let movie = $("#movie").val();
    let animal = $("#animal").val();
    let tvShow = $("#tvShow").val();

    let allFav = [food, movie, animal, tvShow];
    let allFavRevised = [];
    allFavRevised.push(allFav[0], allFav[1], allFav[2], allFav[3]);

    // console.log(allFavRevised);
    $("#resultOne").append("<li>" + allFavRevised[0] + "</li>");
    $("#resultOne").append("<li>" + allFavRevised[1] + "</li>");
    $("#resultOne").append("<li>" + allFavRevised[2] + "</li>");
    $("#resultOne").append("<li>" + allFavRevised[3] + "</li>");

   

    event.preventDefault();

});
});