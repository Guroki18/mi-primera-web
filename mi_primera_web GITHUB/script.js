//alert("Hola este es mi Javascript")
//let nombre ="Marta"
//console.log(nombre)



//A partir de aqui, son practicas para son CONDICIONALES

//let contenidotitulo = "parrafo1";
//let titulo = document.querySelector (".presentacion");
//titulo.innerHTML = contenidotitulo

//Condicionales
//let textotitulo = titulo.innerHTML;
//console.log(textotitulo);

//if(textotitulo== "airam cara de poto") {
    //titulo.innerHTML = "no se baña";
//}
//else {
    //console.log("no se cumple");
//}

//A partir de aqui, son practicas para son FUNCIONES

//let nombre = "Airam"
//let ciudad = "Pisco"
//let apodo = "furcrencia"
//let gusto = "dormir"

//let parrafo = document.querySelector(".presentacion");

//function cambiartexto(nombre, ciudad, apodo, gusto) {
    //let contenido = `Mi nombre es ${nombre}, me gusta que me llamen ${apodo} y ahora estoy aprendiendo programación. Vivo en ${ciudad} y me gusta ${gusto} c:`;
    
    //return contenido;
//}

//parrafo.innerText = cambiartexto(nombre, ciudad, apodo, gusto)

 //MENU CON JAVASCRIPT

let menu_responsive = document.querySelector("checkbtn");

menu_responsive.onclick = function() {
    navBar = document.querySelector(".navbar");
    navBar.classList.toogle("active");
};