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
        '<svg id="full-heart" class="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>'
      ].join("\n")
    )
  }
  else{
    $("#heartInterest").append(
      [
        '<svg id="empty-heart" class="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>'
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
  if (document.getElementById("heartInterest").contains(document.getElementById("full-heart"))){
    deleteFromDatabase_interest(s3);
    $("#heartInterest").empty();
    $("#heartInterest").append(
      [
        '<svg id="empty-heart" class="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>'
      ].join("\n")
    )
  }
  else{
    writeToDatabase_interest(s3);
    $("#heartInterest").empty();
    $("#heartInterest").append(
      [
        '<svg id="full-heart" class="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>'
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