var likeIngres = [];
var dislikeIngres = [];
var allIngres = [];


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


var deg_of_recommen = 1;
function checkElems() {

  document.getElementById("recommend").innerHTML="";
  /*

  var deg_of_recommen = 1;
  likeIngres = getIngres(likeCocktails);
  dislikeIngres = getIngres(dislikeCocktails);
  for (var i = 0; i < likeIngres.length; i++) {
    if (likeIngres[i].includes(s1)) {
      deg_of_recommen++;
    }
  }
  for (var j = 0; j < dislikeIngres.length; j++) {
    if (dislikeIngres[j].includes(s1)) {
      deg_of_recommen--;
    }
  }
  */
  var likenames=[];
  var dislikenames=[];


  for (var i=0; i<likeCocktails.length; i++){
    likenames.push(likeCocktails[i]['name']);
  }
  for (var i=0; i<dislikeCocktails.length; i++){
    
    dislikenames.push(dislikeCocktails[i]['name']);
  }
  

  if (likenames.includes(s1['name']) || likenames.includes(s2['name']) || likenames.includes(s3['name'])){
    deg_of_recommen +=1;
  }
  if (dislikenames.includes(s1['name']) || dislikenames.includes(s2['name']) || dislikenames.includes(s3['name']) ){
    deg_of_recommen -=1;
  }

  if (deg_of_recommen >= 2) {
    $("#recommend").append(
      [
        '<span class="badge badge-success center" style="font-size: x-small; align-self: center;">recommended for you</span>',
      ].join("\n")
    );
  }
  else if (deg_of_recommen == 1) {
    $("#recommend").append(
      [
        '<span class="badge badge-warning center" style="font-size: x-small; align-self: center;">neither recommended nor not recommended</span>',
      ].join("\n")
    );
  } else {
    $("#recommend").append(
      [
        '<span class="badge badge-danger center" style="font-size: x-small; align-self: center;">not recommended for you</span>',
      ].join("\n")
    );
  }
}

/*
$(document).ready(function () {
  allIngres = getIngres([s1, s2, s3, s4, s5, s6]);

 
});
*/

// this section of code is from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// same for detail_s2, s3,s4,s5,s6.js file

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  checkElems();
  // expected output: 'resolved'
}

// this section of code is from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
