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


  var interestnames=[];
  for (var i=0; i<interestCocktails.length; i++){
    interestnames.push(interestCocktails[i]['name']);
  }
  if (interestnames.includes(s3['name'])){
    $("#heartInterest").append(
      [
        '<svg class="bi bi-star-fill" id="full-star" width="2em" height="2em" viewBox="0 0 16 16" fill="#FFD300" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>'
      ].join("\n")
    )
  }
  else{
    $("#heartInterest").append(
      [
        '<svg class="bi bi-star" width="2em" height="2em" viewBox="0 0 16 16" fill="#FFD300" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>'
      ].join("\n")
    )
  }
  
  if (likenames.includes(s3['name'])){
    $("#like").css("background-color", "#89cff0");
  }
  else if (dislikenames.includes(s3['name'])){
    $("#dislike").css("background-color", "#ff2800");
  }

}

function changelikecolor(){
  if(document.getElementById("like").style.backgroundColor=="rgb(137, 207, 240)"){
    document.getElementById("like").style.backgroundColor = "";
    deleteFromDatabase_like(s3);
  }
  else if(document.getElementById("like").style.backgroundColor==""){
    if(document.getElementById("dislike").style.backgroundColor=="rgb(255, 40, 0)"){
      document.getElementById("dislike").style.backgroundColor="";
      document.getElementById("like").style.backgroundColor="rgb(137, 207, 240)";
      writeToDatabase_like(s3);
      deleteFromDatabase_dislike(s3);
    }
    else{
      document.getElementById("like").style.backgroundColor="rgb(137, 207, 240)";
      writeToDatabase_like(s3);
    }
  }
}
function changedislikecolor(){
  if(document.getElementById("dislike").style.backgroundColor=="rgb(255, 40, 0)"){
    document.getElementById("dislike").style.backgroundColor = "";
    deleteFromDatabase_dislike(s3);
  }
  else if(document.getElementById("dislike").style.backgroundColor==""){
    if(document.getElementById("like").style.backgroundColor=="rgb(137, 207, 240)"){
      document.getElementById("like").style.backgroundColor="";
      document.getElementById("dislike").style.backgroundColor="rgb(255, 40, 0)";
      writeToDatabase_dislike(s3);
      deleteFromDatabase_like(s3);
    }
    else{
      document.getElementById("dislike").style.backgroundColor="rgb(255, 40, 0)";
      writeToDatabase_dislike(s3);
    }
  }
}

function changeshape(){
  if (document.getElementById("heartInterest").contains(document.getElementById("full-star"))){
    deleteFromDatabase_interest(s3);
    $("#heartInterest").empty();
    $("#heartInterest").append(
      [
        '<svg class="bi bi-star" width="2em" height="2em" viewBox="0 0 16 16" fill="#FFD300" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>'
      ].join("\n")
    )
  }
  else{
    writeToDatabase_interest(s3);
    $("#heartInterest").empty();
    $("#heartInterest").append(
      [
        '<svg class="bi bi-star-fill" id="full-star" width="2em" height="2em" viewBox="0 0 16 16" fill="#FFD300" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>'
      ].join("\n")
    )
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