// Ejercicio para hallar el número Pi
// 1.ejercicio con variables
var limite = 10;
var resultado=0;
for (var i = 0; i < limite; i++) {
  var impares = 2 * i + 1;
  

  if (i % 2 == 0) {
    resultado = resultado + 1 / impares;
  } else {
    resultado = resultado - 1 / impares;
  }
  console.log(4 * resultado);
}
