// Cuadrado
function calcularPerimetroCuadrado(l) {
  return l * 4;
}
function calcularAreaCuadrado(l) {
  return l ** 2;
}
// Triangulo
function calcularPerimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function calcularAreaTriangulo(b, h) {
  return (b * h) / 2;
}
// Circulo
function calcularPerimetroCirculo(r) {
  return 2 * r * Math.PI;
}
function calcularAreaCirculo(r) {
  return Math.PI * r ** 2;
}

// Area y Perímetro del Cuadrado -----------------------------

const inputLadoCuadrado = document.getElementById("lado-cuadrado");
const btnCuadradoPerimetro = document.getElementById(
  "calcular-perimetro-cuadrado"
);
const btnCuadradoArea = document.getElementById("calcular-area-cuadrado");
const resultadoCuadrado = document.getElementById("respuesta-cuadrado");

function mostrarPerimetroCuadrado() {
  if (inputLadoCuadrado.value != 0) {
    let perimetroCuadrado = calcularPerimetroCuadrado(inputLadoCuadrado.value);
    perimetroCuadrado =
      Math.round((perimetroCuadrado + Number.EPSILON) * 100) / 100;
    console.log(perimetroCuadrado);
    resultadoCuadrado.innerHTML = `${perimetroCuadrado}cm`;
  } else {
    resultadoCuadrado.innerHTML = `Faltan datos 😕`;
  }
}
function mostrarAreaCuadrado() {
  if (inputLadoCuadrado.value != 0) {
    let areaCuadrado = calcularAreaCuadrado(inputLadoCuadrado.value);
    areaCuadrado = Math.round((areaCuadrado + Number.EPSILON) * 100) / 100;
    resultadoCuadrado.innerHTML = `${areaCuadrado}cm <sup>2</sup>`;
  } else {
    resultadoCuadrado.innerHTML = `Faltan datos 😕`;
  }
}

// Area y Perímetro del Triángulo -----------------------------

const inputLadoUnoTriangulo = document.getElementById("lado1-triangulo");
const inputLadoDosTriangulo = document.getElementById("lado2-triangulo");
const inputBaseTriangulo = document.getElementById("base-triangulo");
const inputAlturaTriangulo = document.getElementById("altura-triangulo");
const btnTrianguloPerimetro = document.getElementById(
  "calcular-perimetro-triangulo"
);
const btnTrianguloArea = document.getElementById("calcular-area-triangulo");
const resultadoTriangulo = document.getElementById("respuesta-triangulo");

function mostrarPerimetroTriangulo() {
  if (
    inputLadoUnoTriangulo.value != 0 &&
    inputLadoDosTriangulo.value != 0 &&
    inputBaseTriangulo.value != 0
  ) {
    let perimetroTriangulo = calcularPerimetroTriangulo(
      Number(inputLadoUnoTriangulo.value),
      Number(inputLadoDosTriangulo.value),
      Number(inputBaseTriangulo.value)
    );
    perimetroTriangulo =
      Math.round((perimetroTriangulo + Number.EPSILON) * 100) / 100;
    resultadoTriangulo.innerHTML = `${perimetroTriangulo}cm`;
  } else {
    resultadoTriangulo.innerHTML = `Faltan datos 😕`;
  }
}
function mostrarAreaTriangulo() {
  if (inputBaseTriangulo.value != 0 && inputAlturaTriangulo.value != 0) {
    let areaTriangulo = calcularAreaTriangulo(
      inputBaseTriangulo.value,
      inputAlturaTriangulo.value
    );
    areaTriangulo = Math.round((areaTriangulo + Number.EPSILON) * 100) / 100;
    resultadoTriangulo.innerHTML = `${areaTriangulo}cm<sup>2</sup>`;
  } else {
    resultadoTriangulo.innerHTML = `Faltan datos 😕`;
  }
}

// Area y Perímetro del Circulo -----------------------------

const inputRadioCirculo = document.getElementById("radio-circulo");
const btnCirculoPerimetro = document.getElementById(
  "calcular-perimetro-circulo"
);
const btnCirculoArea = document.getElementById("calcular-area-circulo");
const resultadoCirculo = document.getElementById("respuesta-circulo");

function mostrarPerimetroCirculo() {
  if (inputRadioCirculo.value != 0) {
    let perimetroCirculo = calcularPerimetroCirculo(inputRadioCirculo.value);
    perimetroCirculo =
      Math.round((perimetroCirculo + Number.EPSILON) * 100) / 100;
    console.log(perimetroCirculo);
    resultadoCirculo.innerHTML = `${perimetroCirculo}cm`;
  } else {
    resultadoCirculo.innerHTML = `Faltan datos 😕`;
  }
}
function mostrarAreaCirculo() {
  if (inputRadioCirculo.value != 0) {
    let areaCirculo = calcularAreaCirculo(inputRadioCirculo.value);
    areaCirculo = Math.round((areaCirculo + Number.EPSILON) * 100) / 100;
    resultadoCirculo.innerHTML = `${areaCirculo}cm<sup>2</sup>`;
  } else {
    resultadoCirculo.innerHTML = `Faltan datos 😕`;
  }
}
