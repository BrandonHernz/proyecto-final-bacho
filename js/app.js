/**
 * Esta función muestra la
 * seccion de la figura que
 * se desea mostrar
 */
function seleccionarFigura() {
  if (opcionCuadrado.checked) {
    alert("Seleccionaste al cuadrado");
    sectionCuadrado.style.display = "block";
    sectionRectangulo.style.display = "none";
    sectionTriangulo.style.display = "none";
    sectionCirculo.style.display = "none";
    sectionPentagono.style.display = "none";
  } else if (opcionRectangulo.checked) {
    alert("Seleccionaste el rectangulo");
    sectionRectangulo.style.display = "block";
    sectionCuadrado.style.display = "none";
    sectionTriangulo.style.display = "none";
    sectionCirculo.style.display = "none";
    sectionPentagono.style.display = "none";
  } else if (opcionTriangulo.checked) {
    alert("Seleccionaste el triangulo");
    sectionTriangulo.style.display = "block";
    sectionCuadrado.style.display = "none";
    sectionRectangulo.style.display = "none";
    sectionCirculo.style.display = "none";
    sectionPentagono.style.display = "none";
  } else if (opcionCirculo.checked) {
    alert("Seleccionaste el circulo");
    sectionCirculo.style.display = "block";
    sectionTriangulo.style.display = "none";
    sectionCuadrado.style.display = "none";
    sectionRectangulo.style.display = "none";
    sectionPentagono.style.display = "none";
  } else if (opcionPentagono.checked) {
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

// Opciones de Figuras
let opcionCuadrado = document.getElementById("cuadrado");
let opcionRectangulo = document.getElementById("rectangulo");
let opcionTriangulo = document.getElementById("triangulo");
let opcionCirculo = document.getElementById("circulo");
let opcionPentagono = document.getElementById("pentagono");

// Secciones del documento
let sectionCuadrado = document.getElementById("contenedor-cuadrado");
let sectionRectangulo = document.getElementById("contenedor-rectangulo");
let sectionTriangulo = document.getElementById("contenedor-triangulo");
let sectionCirculo = document.getElementById("contenedor-circulo");
let sectionPentagono = document.getElementById("contenedor-pentagono");

let resultadoCuadrado = document.getElementById("section-resultadoCu");
let resultadoRectangulo = document.getElementById("section-resultadoR");
let resultadoTriangulo = document.getElementById("section-resultadoT");
let resultadoCirculo = document.getElementById("section-resultadoCi");
let resultadoPentagono = document.getElementById("section-resultadoP");

sectionCuadrado.style.display = "none";
sectionRectangulo.style.display = "none";
sectionTriangulo.style.display = "none";
sectionCirculo.style.display = "none";
sectionPentagono.style.display = "none";

resultadoCuadrado.style.display = "none";
resultadoRectangulo.style.display = "none";
resultadoTriangulo.style.display = "none";
resultadoCirculo.style.display = "none";
resultadoPentagono.style.display = "none";

/**
 * Funciones de calculo de areas:
 * Cuadrado
 * Rectangulo
 * Triangulo
 * Circulo
 * Pentagono
 */

// Área cuadrado
const areaCuadrado = document.getElementById("btnAreaCuad");
areaCuadrado.addEventListener("click", (event) => {
  event.preventDefault();
  let ladoInput = document.getElementById("lado-cuadrado");
  let lado = parseFloat(ladoInput.value);
  let resultado = lado ** 2;
  // Mostrar resultado en Pantalla
  resultadoCuadrado.style.display = "block";
  let txtResultado = document.getElementById("result-cuadrado");
  txtResultado.innerText = `${resultado}`;
  console.log(parseFloat(resultado));
});

// Área rectangulo
const areaRectangulo = document.getElementById("btnAreaRect");
areaRectangulo.addEventListener("click", (event) => {
  event.preventDefault();
  let baseInput = document.getElementById("base-rectangulo");
  let alturaInput = document.getElementById("altura-rectangulo");
  let base = parseFloat(baseInput.value);
  let altura = parseFloat(alturaInput.value);
  let resultado = base * altura;
  // Mostrar resultado en Pantalla
  resultadoRectangulo.style.display = "block";
  let txtResultado = document.getElementById("result-rectangulo");
  txtResultado.innerText = `${resultado}`;
  console.log(resultado);
});

// Área triangulo
const areaTriangulo = document.getElementById("btnAreaTria");
areaTriangulo.addEventListener("click", (event) => {
  event.preventDefault();
  let baseInput = document.getElementById("base-triangulo");
  let alturaInput = document.getElementById("altura-triangulo");
  let base = parseFloat(baseInput.value);
  let altura = parseFloat(alturaInput.value);
  let resultado = (base * altura) / 2;
  // Mostrar resultado en Pantalla
  resultadoTriangulo.style.display = "block";
  let txtResultado = document.getElementById("result-triangulo");
  txtResultado.innerText = `${resultado}`;
  console.log(resultado);
});

// Área circulo
const areaCirculo = document.getElementById("btnAreaCirc");
areaCirculo.addEventListener("click", (event) => {
  event.preventDefault();
  let radioInput = document.getElementById("radio-circulo");
  let radio = parseFloat(radioInput.value);
  let resultado = Math.PI * Math.pow(radio, 2);
  // Mostrar resultado en Pantalla
  resultadoCirculo.style.display = "block";
  let txtResultado = document.getElementById("result-circulo");
  txtResultado.innerText = `${resultado}`;
  console.log(resultado);
});

// Área pentagono
const areaPentagono = document.getElementById("btnAreaPent");
areaPentagono.addEventListener("click", (event) => {
  event.preventDefault();
  let inputPerimetro = document.getElementById("perimetro-pentagono");
  let inputApotema = document.getElementById("apotema-pentagono");
  let perimetro = parseFloat(inputPerimetro.value);
  let apotema = parseFloat(inputApotema.value);
  let resultado = (perimetro * apotema) / 2;
  // Mostrar resultado en Pantalla
  resultadoPentagono.style.display = "block";
  let txtResultado = document.getElementById("result-pentagono");
  txtResultado.innerText = `${resultado}`;
  console.log(resultado);
});

/**
 * Obtención de los
 * identificadores de botones de acción y
 * asignación de eventos
 */
const seleccionFigura = document.getElementById("btn-figura");
seleccionFigura.addEventListener("click", seleccionarFigura);
