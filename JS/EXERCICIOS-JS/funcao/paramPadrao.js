// estrategia 1 para gerar valor padrão
function soma(a, b, c) { // função soma com parâmetros variáveis
    a = a || 1 // se a for undefined ou null, a recebe 1
    b = b || 1 // se b for undefined ou null, b recebe 1
    c = c || 1 // se c for undefined ou null, c recebe 1
    return a + b + c // retorna a soma dos argumentos 
}   
console.log(soma()) // 3
console.log(soma(3)) // 5
console.log(soma(1, 2)) // 4
console.log(soma(1, 2, 3)) // 6
console.log(soma(0,0,0)) // 3

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) { // função soma com parâmetros variáveis
    a = a !== undefined ? a : 1 // a é diferente de undefined, se sim, a recebe a, se não, a recebe 1
    b = 1 in arguments ? b : 1 // se 1 existe em arguments, b recebe b, se não, b recebe 1
    c = isNaN(c) ? 1 : c // se c é NaN, c recebe 1, se não, c recebe c
    return a + b + c // retorna a soma dos argumentos
}
console.log(soma2()) // 3
console.log(soma2(3)) // 5
console.log(soma2(1, 2)) // 4
console.log(soma2(1, 2, 3)) // 6
console.log(soma2(0,0,0)) // 3

//valor  padrão do es2015 a MELHOR FORMA DE USAR NO CÓDIGO
// estratégia 5 para gerar valor padrão
function soma3(a = 1, b = 1, c = 1) { // função soma com parâmetros variáveis
    return a + b + c // retorna a soma dos argumentos 
}   
console.log(soma3()) // 3
console.log(soma3(3)) // 5
console.log(soma3(1, 2)) // 4
console.log(soma3(1, 2, 3)) // 6
