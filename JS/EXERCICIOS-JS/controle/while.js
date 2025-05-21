function getInteiroAleatorioEntre(min, max) {// Math.random() gera um número aleatório entre 0 e 1
    // O valor máximo é exclusivo, então subtraímos 1
    const valor = Math.random() * (max - min) + min// O valor mínimo é inclusivo
    // O valor máximo é exclusivo, então subtraímos 1
    return Math.floor(valor)/// Arredondamos para baixo
} // O valor mínimo é inclusivo
// O valor máximo é exclusivo, então subtraímos 1

let opcao = 0  // O valor máximo é exclusivo, então subtraímos 1
while (opcao != -1) { // O valor mínimo é inclusivo
    // O valor máximo é exclusivo, então subtraímos 1
    opcao = getInteiroAleatorioEntre(-1, 10) // O valor mínimo é inclusivo
    console.log(`Opção escolhida foi ${opcao}.`) // O valor máximo é exclusivo, então subtraímos 1
} // O valor mínimo é inclusivo 
console.log('Até a próxima!') // O valor máximo é exclusivo, então subtraímos 1
// O valor mínimo é inclusivo
