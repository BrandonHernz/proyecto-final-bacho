// Función de inicio
function iniciarScript() {
  // Componentes del documento
  const seleccionFigura = document.getElementById("btn-figura");
  seleccionFigura.addEventListener("click", seleccionarFigura);

  // Secciones del documento
  let sectionCuadrado = document.getElementById("contenedor-cuadrado");
  let sectionRectangulo = document.getElementById("contenedor-rectangulo");
  let sectionTriangulo = document.getElementById("contenedor-triangulo");
  let sectionCirculo = document.getElementById("contenedor-circulo");
  let sectionPentagono = document.getElementById("contenedor-pentagono");

  sectionCuadrado.style.display = "none";
  sectionRectangulo.style.display = "none";
  sectionTriangulo.style.display = "none";
  sectionCirculo.style.display = "none";
  sectionPentagono.style.display = "none";
}

/**
 * Esta función muestra la
 * seccion de la figura que
 * se desea mostrar
 */
function seleccionarFigura() {
  let inputCuadrado = document.getElementById("cuadrado");
  let inputRectangulo = document.getElementById("rectangulo");
  let inputTriangulo = document.getElementById("triangulo");
  let inputCirculo = document.getElementById("circulo");
  let inputPentagono = document.getElementById("pentagono");

  // Secciones del documento

  let sectionCuadrado = document.getElementById("contenedor-cuadrado");
  let sectionRectangulo = document.getElementById("contenedor-rectangulo");
  let sectionTriangulo = document.getElementById("contenedor-triangulo");
  let sectionCirculo = document.getElementById("contenedor-circulo");
  let sectionPentagono = document.getElementById("contenedor-pentagono");

  if (inputCuadrado.checked) {
    alert("Seleccionaste al cuadrado");
    sectionCuadrado.style.display = "block";
    sectionRectangulo.style.display = "none";
    sectionTriangulo.style.display = "none";
    sectionCirculo.style.display = "none";
    sectionPentagono.style.display = "none";
  } else if (inputRectangulo.checked) {
    alert("Seleccionaste el rectangulo");
    sectionRectangulo.style.display = "block";
    sectionCuadrado.style.display = "none";
    sectionTriangulo.style.display = "none";
    sectionCirculo.style.display = "none";
    sectionPentagono.style.display = "none";
  } else if (inputTriangulo.checked) {
    alert("Seleccionaste el triangulo");
    sectionTriangulo.style.display = "block";
    sectionCuadrado.style.display = "none";
    sectionRectangulo.style.display = "none";
    sectionCirculo.style.display = "none";
    sectionPentagono.style.display = "none";
  } else if (inputCirculo.checked) {
    alert("Seleccionaste el circulo");
    sectionCirculo.style.display = "block";
    sectionTriangulo.style.display = "none";
    sectionCuadrado.style.display = "none";
    sectionRectangulo.style.display = "none";
    sectionPentagono.style.display = "none";
  } else if (inputPentagono.checked) {
    alert("Seleccionaste el pentagono");
    sectionPentagono.style.display = "block";
    sectionCirculo.style.display = "none";
    sectionTriangulo.style.display = "none";
    sectionCuadrado.style.display = "none";
    sectionRectangulo.style.display = "none";
  } else {
    return alert("Debes seleccionar una figura para continuar");
  }
}

/**
 * Espera que el navegador termine
 * de cargar todo el HTML, para después ejecutar el script
 */
window.addEventListener("load", iniciarScript);
