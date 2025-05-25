const pessoa = {
    saudação: 'Bom dia!', 
    falar () {
        console.log(this.saudação) // this é o objeto que chamou a função
    }
}

pessoa.falar() // Bom dia!
const falar = pessoa.falar // atribuindo a função falar a variável falar
falar() // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind() cria uma nova função com o this definido como o objeto passado como argumento
falarDePessoa() // Bom dia!

//BIHIND amarra o this ao objeto passado como argumento
