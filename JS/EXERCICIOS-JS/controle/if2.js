function teste1(num) {
    if (num > 7) 
        console.log(num);

console.log('Final');
    }
teste1(6);
teste1(8);

function teste2(num) {
    if (num > 7); { // Cuidado com o ; no final da linha
        console.log(num);
    }
}       

teste2(6);
teste2(8);
// O ; no final da linha faz com que o if não funcione como esperado
// O bloco de código dentro do if não será executado
// O ; finaliza a instrução, então o bloco de código sempre será executado
// O correto é não usar o ; no final da linha
