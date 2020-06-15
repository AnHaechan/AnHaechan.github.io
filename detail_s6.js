var likeIngres = [];
var dislikeIngres = [];
var allIngres = [];
var deg_of_recommen = 1;

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

function checkElems() {
  document.getElementById("recommend").innerHTML="";
  var deg_of_recommen = 1;
  var likenames=[];
  var dislikenames=[];


  for (var i=0; i<likeCocktails.length; i++){
    likenames.push(likeCocktails[i]['name']);
  }
  for (var i=0; i<dislikeCocktails.length; i++){
    
    dislikenames.push(dislikeCocktails[i]['name']);
  }
  console.log(dislikenames);

  if (likenames.includes(s4['name']) || likenames.includes(s5['name']) || likenames.includes(s6['name'])){
    deg_of_recommen +=1;
  }
  if (dislikenames.includes(s4['name']) || dislikenames.includes(s5['name']) || dislikenames.includes(s6['name']) ){
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