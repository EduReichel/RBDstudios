function changeImage() {
                    
   /* var path = document.getElementById("1").alt;
    prompt(path);*/
    
    if (document.getElementById('1').alt=="1") 
    {
        document.getElementById("principal").src = "img/artMuseum/5.jpg";
    }
    else if (document.getElementById("2").src == "../img/artMuseum/4.jpg")
    {
       var prueba = document.getElementById("principal");
        prueba.src = "img/artMuseum/6.jpg";
    }
    else if (document.getElementById("3").src == "img/artMuseum/7.jpg")
    {
        document.getElementById("principal").src = "img/artMuseum/7.jpg";
    }
    else if (document.getElementById("4").src == "img/artMuseum/8.jpg")
    {
        document.getElementById("principal").src = "img/artMuseum/8.jpg";
    }
    else {
        document.getElementById("principal").src = "img/artMuseum/error.jpg";
    }
}