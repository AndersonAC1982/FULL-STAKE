 // IIFE invoca imediatamente uma função
(function() {
    console.log('Olá, mundo!'); // imprime uma mensagem
    console.log('Foge do ewcopo mais abrangente' ); // imprime o nome
})(); // chama a função imediatamente

// Exemplo de IIFE com parâmetros
(function(nome) {
    console.log(`Meu nome é ${nome}`); // imprime o nome passado como parâmetro
})('Anderson'); // chama a função imediatamente com o parâmetro 'Anderson'  

// Exemplo de IIFE com retorno
(function() {
    const nome = 'Anderson'; // variável local
    return `Meu nome é ${nome}`; // retorna o nome
})() // chama a função imediatamente e imprime o retorno
  .then(console.log); // imprime o retorno da IIFE

// Exemplo de IIFE com escopo de bloco
(function() {
    const nome = 'Anderson'; // variável local
    if (true) {
        const sobrenome = 'Silva'; // variável local dentro do bloco
        console.log(`Meu nome é ${nome} ${sobrenome}`); // imprime o nome e sobrenome
    }
})(); // chama a função imediatamente

// Exemplo de IIFE com escopo de bloco e parâmetros
(function(nome, sobrenome) {
    console.log(`Meu nome é ${nome} ${sobrenome}`); // imprime o nome e sobrenome passados como parâmetros
})('Anderson', 'Silva'); // chama a função imediatamente com os parâmetros 'Anderson' e 'Silva'

// Exemplo de IIFE com escopo de bloco e retorno
(function() {
    const nome = 'Anderson'; // variável local
    return function(sobrenome) {
        return `Meu nome é ${nome} ${sobrenome}`; // retorna o nome e sobrenome
    };
})()('Silva') // chama a função imediatamente com o parâmetro 'Silva' e imprime o retorno
  .then(console.log); // imprime o retorno da IIFE