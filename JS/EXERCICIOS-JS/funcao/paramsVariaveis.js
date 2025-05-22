function soma() { // função soma com parâmetros variáveis
    // arguments é um objeto semelhante a um array que contém os argumentos passados para a função
    let soma = 0;//
    for (i in arguments) {
        soma += arguments[i];// soma recebe o valor de soma + o valor do argumento
    }       
    return soma// retorna a soma dos argumentos 
}

console.log(soma())
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, 3.3)) // 6.6
console.log(soma(1.1, 2.2, "Teste")) // 3.3
console.log(soma("a", "b", "c")) // 0abc
console.log(soma("a", 1, "b", 2)) // 0a1b2 