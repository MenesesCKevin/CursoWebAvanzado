//cuando se cargue todo va a ejecutar
$(document).ready(function(){
  var imagenes=['imagenes/img1.jpg','imagenes/img2.jpg','imagenes/img3.jpg','imagenes/img4.png','imagenes/img5.jpg'];
  $(".imagenDeFondo").css('background-image','url('+imagenes[Math.floor(Math.random()*5)]+')');


  $("#mandar").click(function(){
  var direccion =  $("#direc").val();




  var link=' https://maps.googleapis.com/maps/api/geocode/json?address='+direccion+"&key=AIzaSyAW9qewYxzPu0kbYyEtGl15goj5PzT8gOA";
  //document.write(link);
  //recibe un objeto para hacer consulta en una api
  $.ajax({
    dataType: "json",
    url: link,
    success: recibirDatos
  });
  function recibirDatos(json){
    var informacion= json;
    var codigoPostal = informacion.results[0].address_components[6].long_name;
    console.log(codigoPostal);


    $("#respuesta").append('<div class="offset-m3 col col m6 card-panel lighten-5 center-align"><h6>Tu codigo postal es:'+codigoPostal+'</h6></div>');
  }
  
  });
});
