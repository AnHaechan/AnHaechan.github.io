//function for the search bar and button
function mySearch(){
    var input = document.getElementById("searchInput").value;
    if (0==input.localeCompare("Blue Hawaii")){
        location.href='./detail_bluehawaii.html';
    }
    else if(0==input.localeCompare("Blue Monday")){
        location.href='./detail_bluemonday.html';
    }
    else if(0==input.localeCompare("Blue Sapphire")){
        location.href='./detail_bluesapphire.html';
    }
    else if(0==input.localeCompare("Mimosa")){
        location.href='./detail_mimosa.html';
    }
    else if(0==input.localeCompare("Orange Blossom")){
        location.href='./detail_orangeblossom.html';
    }
    else if(0==input.localeCompare("Screwdriver")){
        location.href='./detail_screwdriver.html';
    }
    else{
        alert("Insert in a correct cocktail name!")
    }
}