// Funcion toggle para el menu mobile
$("#barra").click(function () {
  $("#menu-toogle").toggleClass("active");
});
// Funciones para ocultar el menu al hacer click afuera del menu en mobile
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

// Funciones para que aparezcan los modales
$("#icon-carrito").click(function () {
  $("#modal1").modal();
});

$("#icon-cuenta").click(function () {
  $("#modal2").modal();
});
