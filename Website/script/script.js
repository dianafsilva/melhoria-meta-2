var clicked=true;
function changeImg() {
    var menu = document.getElementById('menuClasses');
    var image = document.getElementById('imgbtn');
    var hamburguer = document.getElementById('divmenu');
    if (image.src.match("data/hi1.svg")) {
        image.src = "data/hi2.svg";
        clicked=true;
        menu.style.left="0%";
        menu.style.zIndex="10";
    }
    else {
        image.src = "data/hi1.svg";
        clicked=false;
        menu.style.left="-25%";
        menu.style.zIndex="10";
    }
    console.log(clicked);
}


var search = false
function moveSearch() {
    var dir = document.getElementById('dir');

    if (search){
        search=false;
        dir.style.marginRight="0vw";
    }
    else {
        search=true;
        dir.style.marginRight="14.5vw";
    }
    console.log(search);
}


/*
document.getElementById('menu-hamburguer').addEventListener('click', function(){
    if(clicked)
    {
        clicked=false;
        document.getElementById('menuClasses').style={
            right: "0%"
           }
    }
    else
    {
        clicked=true;
        document.getElementById('menuClasses').style={
            right: "20%"
           }
    }
});*/



