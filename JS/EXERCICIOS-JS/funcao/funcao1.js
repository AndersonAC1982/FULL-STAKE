//Funçcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}   

imprimirSoma(2, 3); // 5
imprimirSoma(2); // NaN
imprimirSoma(2, 10, 4, 5, 6,7,8);
imprimirSoma(); // NaN

//Função com retorno
function soma(a, b = 0) {
    return a + b;// 0 é o valor padrão 
}
console.log(soma(2, 3)); // 5 // 2 + 3
console.log(soma(2)); // 2 // 2 + 0
console.log(soma()); // NaN

