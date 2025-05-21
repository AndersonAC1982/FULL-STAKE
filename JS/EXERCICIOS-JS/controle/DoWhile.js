function getInteiroAleatorioEntre(min, max) {// Math.random() gera um número aleatório entre 0 e 1
    // O valor máximo é exclusivo, então subtraímos 1
    const valor = Math.random() * (max - min) + min// O valor mínimo é inclusivo
    return Math.floor(valor)     // Arredondamos para baixo
}       
let opcao = -1// O valor máximo é exclusivo, então subtraímos 1
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while (opcao != -1)
console.log('Até a próxima!')