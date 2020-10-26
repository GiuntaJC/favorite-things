$(document).ready(function() {
  $("form#food").submit(function(event) {
    const firstFood = $("input#food1").val();
    const secondFood = $("input#food2").val();
    const thirdFood = $("input#food3").val();
    const fourthFood = $("input#food4").val();
    const fifthFood = $("input#food5").val();

    let favoriteFoods = [firstFood, secondFood, thirdFood, fourthFood, fifthFood];
    let newFavoriteFoods = []; 
    newFavoriteFoods.push(favoriteFoods[0], favoriteFoods[1], favoriteFoods[2]);

    $("ul#foodList").append("<li>" + newFavoriteFoods[0] + "</li>");
    $("ul#foodList").append("<li>" + newFavoriteFoods[1] + "</li>");
    $("ul#foodList").append("<li>" + newFavoriteFoods[2] + "</li>");

    event.preventDefault();
  });
});