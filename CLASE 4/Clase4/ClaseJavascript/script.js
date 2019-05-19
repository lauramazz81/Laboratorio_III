/*function Saludar(){
    document.write("Hola Mundo. Escribe en la pagina");
    console.log("Escribo en la consola")
    alert("Hola. Abre una ventana")
    document.getElementById("p1").innerHTML = "Esto es un parrafo}"*/ /*devuelve una referencia al documento que tenga p1 como ID*/

/*document.getElementById("p1").innerHTML = "Esto es un parrafo" /*devuelve una referencia al documento que tenga p1 como ID*/

/*document.getElementById("midiv").innerHTML = "<h2>esto es un titutlo</h2>"*/
var miParrafo;
window.addEventListener('load', inicializarEventos);

function inicializarEventos(){
    miParrafo = document.addEventListener('click', function(){
        this.innerHTML="hello";
    });
}

window.addEventListener('load', ()=>{
  document.getElementById('p1').addEventListener('click', function(){
    this.innerHTML="hello";
  })

});

/*document.getElementById('p1').onclick = function(){
     this.innerHTML="jajajaj"
}; ESTO ESTA MAL

document.getElementById('p1').addEventListener('click', function(){
    this.style.color="blue";
});*/


