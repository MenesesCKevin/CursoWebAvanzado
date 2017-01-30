/*if(jQuery){
  alert("Si tenemos jQuery")
}*/
//Aceder a algo sin hacer tanto con jQuery $ clase "." id "#" modo de referenciar
/*
$(".circulo").click(function(){
  alert("Soy el circulo")
});
$("#cuadrado").click(function(){
  alert("Soy el cuadrado")
});
*/
//Modo de referenciar por etiqiuetas
/*
$("div").click(function(){
  alert("Soy un div");
});
$("p").click(function(){
  alert("Soy un parrafo")
})
$("*").click(function(){
  alert("afecto a todo")
})*/
//metodo html nos regresa lo que esta dentro de las etiquetas
/*
var cl=0;
$(".circulo").click(function(){
  //$("p").html("Texto remplazado");
  //atributo de una etiqueta de html
  if (cl==0) {
    $("iframe").attr("src", "http://www.jornada.unam.mx/ultimas");
    cl++;
  else if (cl==1) {
    $("iframe").attr("src", "http://edition.cnn.com/");
    cl++;
  }
  }else {
    $("iframe").attr("src", "http://www.eluniversal.com.mx/");
    cl=0;
  }

});*/
//css cambiar atributos

/*$("button").click(function(){
  //$(".circulo").css("width","400px");
  $(".circulo").css({
    'width:' : '300px',
    'height' : '300px'
  });
  //agrega un clase
  $(".circulo").addClass("guayaba");
});*/
/*$("button").click(function(){
  //$(".circulo").hide();
  $(".circulo").fadeOut(3000);
});*/
/*$(".circulo").click(function(){
  $(this).animate({
    width:"300px",
    height:"300px",
  }, 4000);
});*/
$(".circulo").hover(function(){
  $(this).animate({
    width:"300px",
    height:"300px",
  }, 4000);
});
