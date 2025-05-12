const prod1 = {} // Objeto vazio
prod1.nome = 'Celular Ultra Mega' // Atribuindo valor a propriedade nome
prod1.preco = 4998.90 // Atribuindo valor a propriedade preco
prod1['Desconto Legal'] = 0.40 // Atribuindo valor a propriedade Desconto Legal
// A propriedade Desconto Legal tem espaço, por isso usamos colchetes

console.log(prod1) // Imprimindo o objeto

const prod2 = {// Objeto com propriedades
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:   {
        blablabla: 1,
        obj: { // Objeto dentro de outro objeto
            blablabla: 2 // A propriedade blablabla tem o valor 2
        }
    }
}
console.log(prod2) // Imprimindo o objeto
console.log(prod2.obj.blablabla) // Acessando a propriedade blablabla do objeto obj