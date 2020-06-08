

var likeIngres = [];
var dislikeIngres = [];
var allIngres= [];




function getIngres(cocktailList){
  var ingres=[];
  for (var i=0; i<cocktailList.length; i++){
    cocktail_ingre = cocktailList[i]["ingredients"];
    for (var j=0; j<cocktail_ingre; j++){
      ingre= cocktail_ingre[i];
      if(!ingres.includes(ingre)){
        ingres.push(ingre);
      }
    }
  }
  return ingres;

}

$(document).ready(function() {
  likeIngres = getIngres(likeCocktails);
  dislikeIngres = getIngres(dislikeCocktails);
  allIngres = getIngres([s1,s2,s3,s4,s5,s6]);
});


var chosenIngres = []; // ingridient 마다 radio -> on/off마다 넣거나 빼줌

  function gotoCocktail(chosenIngres){
    //1. by some algorithm(don't need to be complex), choose resulting cocktail
    var cocktail = "bluehawaii";

    // 2. go to that page
    location.href='./detail_'+ cocktail  +'.html'; // ./detail_cocktailname.html 의 cocktailname과 동일한 string이어야함
  }



  function addIngreDOM(ingre){
    // function for adding ingredient object in html
    return;
  }

