console.log(soma(3,4)) // 7

//function declarada
// é carregada antes de executar o código
function soma(a, b) {
    return a + b
}   

//function expressa
const sub = function (a, b) {
    return a - b
}               
console.log(sub(3,4)) // -1

//nomeada
// é carregada antes de executar o código   
// é possível chamar a função antes de declarar
// mas não é possível chamar a função antes de declarar
const mult = function mult(a, b) {
    return a * b
}

console.log(mult(3,4)) // 12
