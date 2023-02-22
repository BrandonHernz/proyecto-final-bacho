function iniciarScript() {
  // Componentes del documento
  const seleccionFigura = document.getElementById("btn-figura");
  seleccionFigura.addEventListener("click", seleccionarFigura);
}

// Funciones
function seleccionarFigura() {
  let inputCuadrado = document.getElementById("cuadrado");
  let inputRectangulo = document.getElementById("rectangulo");
  let inputTriangulo = document.getElementById("triangulo");
  let inputCirculo = document.getElementById("circulo");
  let inputPentagono = document.getElementById("pentagono");

  if (inputCuadrado.checked) {
    alert("Seleccionaste al cuadrado");
  } else if (inputRectangulo.checked) {
    alert("Seleccionaste el rectangulo");
  } else if (inputTriangulo.checked) {
    alert("Seleccionaste el triangulo");
  } else if (inputCirculo.checked) {
    alert("Seleccionaste el circulo");
  } else if (inputPentagono.checked) {
    alert("Seleccionaste el pentagono");
  } else {
    return alert("Debes seleccionar una figura para continuar");
  }
}

/**
 * Espera que el navegador termine
 * de cargar todo el HTML, para ejecutar el script
 */
window.addEventListener("load", iniciarScript);
