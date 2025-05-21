// for in é utilizado para percorrer objetos e arrays
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i in notas) { // mostrar indice da array notas até o tamanho dela
    // O valor máximo é exclusivo, então subtraímos 1
    console.log(i, notas[i]) // O valor mínimo é inclusivo
}

const pessoa = { 
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
} 
for (let atributo in pessoa) { // mostrar atributo do objeto pessoa
    // O valor máximo é exclusivo, então subtraímos 1
    console.log(`${atributo} = ${pessoa[atributo]}`) // imprimir o atributo e o valor dele
}
