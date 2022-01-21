// Funcion toggle para el menu mobile
$("#barra").click(function () {
  $("#menu-toogle").toggleClass("active");
});
// Funciones para ocultar el menu al hacer click afuera
$(window).click(function () {
  $("#menu-toogle").removeClass("active");
});
$("#barra").click(function (event) {
  event.stopPropagation();
});

// Funcion para que aparezca el buscador en desktop
$("#buscar").click(function () {
  $("#input-buscador").addClass("active");
  $("#input-buscador").focus();
});
