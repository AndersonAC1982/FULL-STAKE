//Exemplo fazendo como se fosse usar a função While
let contar = 1
while (contar <= 10) {
    console.log(`Contando ${contar}`)
    contar++
}

// Exemplo fazendo como se fosse usar a função FOR
for (let i = 1; i <= 10; i++) { // O valor máximo é exclusivo, então subtraímos 1 (adiciona 1 enquanto i for menor ou igual a 10 a começar de 1)
    // O valor máximo é exclusivo, então subtraímos 1
    console.log(`Contando ${i}`) // O valor mínimo é inclusivo
}       

// Exemplo fazendo como se fosse usar a função FOR com aray
const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // O valor máximo é exclusivo, então subtraímos 1
for (let i = 0; i < notas.length; i++) { // acrescenta 1 enquanto i for menor que o tamanho do array a começar de 0
    // O valor máximo é exclusivo, então subtraímos 1
    console.log(`Nota = ${notas[i]}`)
}
