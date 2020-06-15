//function for the search bar and button
function mySearch(){
    var input = document.getElementById("searchInput").value;
    if (0==input.localeCompare("Blue Hawaii")){
        document.getElementById("searchInput").value = '';
        location.href='./detail_bluehawaii.html';
    }
    else if(0==input.localeCompare("Blue Monday")){
        document.getElementById("searchInput").value = '';
        location.href='./detail_bluemonday.html';
    }
    else if(0==input.localeCompare("Blue Sapphire")){
        document.getElementById("searchInput").value = '';
        location.href='./detail_bluesapphire.html';
    }
    else if(0==input.localeCompare("Mimosa")){
        document.getElementById("searchInput").value = '';
        location.href='./detail_mimosa.html';
    }
    else if(0==input.localeCompare("Orange Blossom")){
        document.getElementById("searchInput").value = '';
        location.href='./detail_orangeblossom.html';
    }
    else if(0==input.localeCompare("Screwdriver")){
        document.getElementById("searchInput").value = '';
        location.href='./detail_screwdriver.html';
    }
    else{
        document.getElementById("searchInput").value = '';
        alert("Insert in a correct cocktail name!")
       
    }
}