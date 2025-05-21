Number.prototype.entre = function (min, max) { // Adicionando um método ao prototype de Number
  return this >= min && this <= max; // this se refere ao número que está chamando o método
} // O JavaScript faz a conversão implícita


const imprimirResultado = function (nota) { 
  if (nota.entre(9, 10)) {
    console.log('Quadro de honra!');
  } else if (nota.entre(7, 8.99)) {
    console.log('Aprovado com ' + nota);
  } else if (nota.entre(4, 6.99)) {
    console.log('Recuperação com ' + nota);
  } else if (nota.entre(0, 3.99)) {
    console.log('Reprovado com ' + nota);
  } else {
    console.log('Nota inválida!');
  }
}
imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.7);
imprimirResultado(5);
imprimirResultado(3);
imprimirResultado(11);
imprimirResultado(-1);
imprimirResultado('Epa!'); // O JavaScript faz a conversão implícita
// O JavaScript faz a conversão implícita

