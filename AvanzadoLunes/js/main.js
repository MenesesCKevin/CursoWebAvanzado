/*
alert("funciona JS !D");
document.write("podemos mostrar algo");
console.log("Aquí tambien se lee");
document.getElementById("texto").innerHTML="Esté es el segundo texto";
*/
/*Variables
var x,y,z;
x = 5;
y = 6.3;
z = x + y;
alert(z);

x=number(); //asignacion de tipo
*/
/*
function tuNombreCompleto(nombre, apellido){
  var nombreCompleto = nombre + " " + apellido;
  //document.write(nombreCompleto);
  return nombreCompleto;
}


var alumno = tuNombreCompleto("Kevin", "Meneses");
alert(alumno);
*/
/*
//forma de crear objetos básica
var miPrimerObjeto = {
  nombre:"Mau",apellido:"Hernandez"
};

alert(miPrimerObjeto.nombre);
*/
/*
var perosna = "Jorge";
var otraPersona = perosna;

perosna = "Amanda";

document.write(perosna);
document.write(otraPersona);
*/
/*
var perosna ={nombre: "Jorge"};
var otraPersona2=perosna;

perosna.nombre = "amanda";
document.write(perosna.nombre);
document.write(otraPersona2.nombre);
*/
/* Objetos
var fruta = {nombre : "mango",
  color : "amarillo",
  dulce : 8,
  queDulceSoy : function(){
    alert("Soy muy dulce");
  }
};

fruta.queDulceSoy();
*/
/*
alert("retardo");
document.getElementById("primero").innerHTML += "Kevin Osmar Meneses";
*/
/*
document.getElementById("btnConClick").onclick = function(){
  document.getElementById("aparecerTexto").iinnerHTML= "Este es un texto fantasma";

  document.getElementById("aparecerTexto").iinnerHTML= '<p class= etije> Cecilia</p>';

  //document.getElementById("aparecerTexto").style.color= "bule";
  document.getElementById("aparecerTexto").style.cssTex= "color:blue; background-color: red;"
}
*/
/*
var nombre = "primero";
document.getElementById("priboton").onclick= function(){
  document.getElementById(nombre).innerHTML="Si resulto";
}*/


document.getElementById("priboton").onclick= function(){
  var valor = document.getElementById("miImput").value;
  document.getElementById("vacio").innerHTML = valor;
}
