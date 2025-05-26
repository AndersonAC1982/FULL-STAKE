// Exemplo de classe em JavaScript

class Pessoa {
   constructor(nome){
     this.nome = nome
    }
    falar() {
      console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Anderson')
p1.falar()


// Exemplo de factory em JavaScript
const criarPessoa = nome => { // 
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // função anônima que retorna um objeto com o método falar
    }
}

const p2 = criarPessoa ('Anderson')
p2.falar()

// Exemplo de factory com construtor
function Pessoa(nome){  // função construtora que cria um objeto Pessoa
    this.nome = nome

    this.falar = function() {  
        console.log(`Meu nome é ${this.nome}`)// método falar que imprime o nome
    }
}
const p3 = new Pessoa('Anderson')
p3.falar()