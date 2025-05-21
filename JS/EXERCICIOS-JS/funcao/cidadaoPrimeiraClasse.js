//função em JS é Fistt Class OBject
//isso significa que podemos passar uma função como argumento para outra função

//CRIAR DE FORMA LITERAL
function fun1() {}

//aramazenar em uma variável
const fun2 = function() {}; 

//armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]; //array com 3 funções 
//chamar a função do array
console.log(array[0](2, 3)); //5

//armazenar em um objeto
const obj = {};
const obj2 = {
    falar: function() {
        return 'Opa';
    }
};
//passar dunção como parametro
function run(fun) {
    fun();
}

run(function() {
    console.log('Executando...');
}); //Executando...
//uma função pode retornar outra função 
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}
soma(2, 3)(4); //9
//armazenar em uma variável
const soma2 = soma(2, 3);
soma2(4); //9

//função com retorno
function soma3(a, b) {
    return function(c) {
        return a + b + c;
    }
}