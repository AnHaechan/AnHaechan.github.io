var likeIngres = [];
var dislikeIngres = [];
var allIngres = [];

function goBack(){
  window.history.back();
}

function getIngres(cocktailList) {
  var ingres = [];
  for (var i = 0; i < cocktailList.length; i++) {
    var cocktail_ingre = cocktailList[i]["ingredients"];
    for (var j = 0; j < cocktail_ingre.length; j++) {
      var ingre = cocktail_ingre[j];
      if (!ingres.includes(ingre)) {
        ingres.push(ingre);
        console.log(ingre);
      }
    }
  }
  return ingres;
}

function addLikeElems() {
  likeIngres = getIngres(likeCocktails);
  for (var i = 0; i < likeIngres.length; i++) {
    $("#LikeIngre").append(
      [
        '<div class="col">',
        '<div class="checkbox-wrapper" data-toggle="popover" data-placement="top"',
        'data-html="true" data-content="<img src=\'Ingredients_Images/' +
          likeIngres[i].replace("/", " or ") +
          "_help.gif'>\">",
        '<label class="btn btn-light">',
        '<input type="checkbox" autocomplete="off" /> ' + likeIngres[i],
        "</label>",
        "</div>",
        "</div>",
      ].join("\n")
    );
  }
  if (likeIngres.length === 0) {
    document.getElementById("LikeIngre").classList.remove("row-cols-4");
    $("#LikeIngre").append(
      [
        '<div class="col">',
        '<h4>There is no cocktail you like.</h4>',
        "</div>",
      ].join("\n")
    );
  }
  itemReady();
}

function addDislikeElems() {
  dislikeIngres = getIngres(dislikeCocktails);
  for (var i = 0; i < dislikeIngres.length; i++) {
    $("#DislikeIngre").append(
      [
        '<div class="col">',
        '<div class="checkbox-wrapper" data-toggle="popover" data-placement="top"',
        'data-html="true" data-content="<img src=\'Ingredients_Images/' +
          dislikeIngres[i].replace("/", " or ") +
          "_help.gif'>\">",
        '<label class="btn btn-light">',
        '<input type="checkbox" autocomplete="off" /> ' + dislikeIngres[i],
        "</label>",
        "</div>",
        "</div>",
      ].join("\n")
    );
  }

  if (dislikeIngres.length === 0) {
    document.getElementById("DislikeIngre").classList.remove("row-cols-4");
    $("#DislikeIngre").append(
      [
        '<div class="col">',
        '<h4>There is no cocktail you dislike.</h4>',
        "</div>",
      ].join("\n")
    );
  }
  itemReady();
}

$(document).ready(function () {
  allIngres = getIngres([s1, s2, s3, s4, s5, s6]);
  for (var i = 0; i < allIngres.length; i++) {
    $("#ElseIngre").append(
      [
        '<div class="col">',
        '<div class="checkbox-wrapper" data-toggle="popover" data-placement="top"',
        'data-html="true" data-content="<img src=\'Ingredients_Images/' +
          allIngres[i].replace("/", " or ") +
          "_help.gif'>\">",
        '<label class="btn btn-light">',
        '<input type="checkbox" autocomplete="off" /> ' + allIngres[i],
        "</label>",
        "</div>",
        "</div>",
      ].join("\n")
    );
  }

  itemReady();
});

var itemsReady = 0;

function itemReady() {
  if (++itemsReady > 2) {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover({
      trigger: "hover focus",
    });
  }
}

var chosenIngres = []; // ingridient 마다 radio -> on/off마다 넣거나 빼줌

function gotoCocktail(chosenIngres) {
  //1. by some algorithm(don't need to be complex), choose resulting cocktail
  var cocktail = "bluehawaii";

  // 2. go to that page
  location.href = "./detail_" + cocktail + ".html"; // ./detail_cocktailname.html 의 cocktailname과 동일한 string이어야함
}

function addIngreDOM(ingre) {
  // function for adding ingredient object in html
  return;
}
