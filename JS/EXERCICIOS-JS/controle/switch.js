const imprimirResultado = function (nota) {// O JavaScript faz a conversão implícita
  switch (Math.floor(nota)) { // Math.floor arredonda para baixo
    case 10:
      console.log('Quadro de honra!');
      break; // O break é necessário para não cair nos outros casos
    case 9:
    case 8:
    case 7:
      console.log('Aprovado com ' + nota);
      break;
    case 6:
    case 5:
    case 4:
      console.log('Recuperação com ' + nota);
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('Reprovado com ' + nota);
      break;
    default: // O default é o caso padrão, se nenhum dos anteriores for atendido
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
