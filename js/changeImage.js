/* Lo trabajé con "var" y no con "const o let" 
porque no sé si estás claro con el standar de ES6 */ 

var imgPrincipal = document.querySelector("#principal");
var minis = document.querySelectorAll(".imagenes-chicas img");
var opacity = 0.5;

// Asigna la opacidad de la primera imagen de las minis
minis[0].style.opacity = opacity;

//Esto si es ES6. Tambien lo puede lograr con un for loop
minis.forEach(img => img.addEventListener("click", imgActivada));

function imgActivada(e){
  // Resetea el opacity en todos los minis
  minis.forEach(img => (img.style.opacity = 1));

  /*Cambia la imagen actual a la fuente de la imagen en la que se hizo clic*/ 
  imgPrincipal.src = e.target.src;

  // Añade al bonus cheto 
  imgPrincipal.classList.add("fade-in");

  // Remueve la clase fade in del bonus cheto a los 5ms. 
  setTimeout(() => imgPrincipal.classList.remove("fade-in"), 500);

  // Cambia la opacidad al valor de la variable opacity dentro del bloque de la funcion. 
  e.target.style.opacity = opacity;
}