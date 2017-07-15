function actualizacionVariable(limite, a) {
  for (var i = 0; i < limite; i++) {
    a = 1 + 1 / a;
    console.log(a);
  }
return a;

}

actualizacionVariable(10, 1);
// preguntar al profesor cómo hacer el esquema de la fracción