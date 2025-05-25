//jeito normal de uma função 
let dobro = function (a) {
    return 2 * a
}

console.log(dobro(7)) // 14 


// jeito 1 de criar com arrow function
let dobro1 = (a) =>  {
    return 2 * a
}

console.log(dobro1(14)) // 28

// jeito 2 de criar com arrow function

let dobro2  = a => 2 * a // não precisa de chaves e nem de return
console.log(dobro2(28)) // 56

ola =_ => 'Olá'

console.log(ola)