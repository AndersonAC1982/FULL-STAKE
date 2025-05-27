//coleção dinamica de pares chave-valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco //deleta a propriedade preco
delete produto['marca do produto'] //deleta a propriedade marca do produto
console.log(produto)

const carro = {
    modelo: 'A4',
    preco: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // lógica para calcular o valor do seguro
        //...
    }
}

carro.proprietario.endereco.numero = 1000 //altera o numero do endereco do proprietario
console['proprietario'] ['endereco'].logradouro = 'Av Gigante' //altera o logradouro do endereco do proprietario
console.log(carro)

delete carro.condutores //deleta a propriedade condutores
console.log(carro)
console.log(carro.condutores) //undefined, pois a propriedade foi deletada
console.log(carro.condutores.length) //erro, pois carro.condutores não existe mais
console.log(carro.condutores ? carro.condutores.length : 'Propriedade condutores não existe') //verifica se a propriedade condutores existe antes de acessar o length

