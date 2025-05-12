var a = 3
let b = 4

var a = 30 // redeclarando a variável a
b = 40  // redeclarando a variável b
console.log(a, b) // 30 40

a =300  // reatribuindo o valor da variável a
b = 400  // reatribuindo o valor da variável b      
console.log(a, b) // 300 400

const c = 5
// c = 50 // não é possível reatribuir o valor de uma constante 
// console.log(c) // erro: Assignment to constant variable
 c = 5
console.log(c) // 5
//const c = 50 // não é possível redeclarar uma constante
