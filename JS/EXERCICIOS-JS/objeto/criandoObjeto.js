//usandeo objeto literal
const obj1 = {}
    console.log('obj1') //imprime 'obj1'


//object em Js
const obj2 = new Object
obj2.console = function() {
    console.log('obj2') //imprime 'obj2'
}   

//funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)   
console.log(p1.getPrecoComDesconto()) //imprime o preço com desconto da caneta
console.log(p2.getPrecoComDesconto()) //imprime o preço com desconto do notebook
// console.log(p1.nome) //imprime o nome do produto p1
// console.log(p2.nome) //imprime o nome do produto p2

//função factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario()) //imprime o salário do funcionário f1
console.log(f2.getSalario()) //imprime o salário do funcionário f2
// console.log(f1.nome) //imprime o nome do funcionário f1