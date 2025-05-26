//factory simples (fabrica de objetos)
export function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva',
        idade: 30,  
    }
}
console.log(criarPessoa()); // { nome: 'Ana', sobrenome: 'Silva', idade: 30 }

// factory com parametros
export function criarPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,  
    }
}
console.log(criarPessoa('João', 'Souza', 25)) // { nome: 'João', sobrenome: 'Souza', idade: 25 }

// factory com destructuring
export function criarPessoa({ nome, sobrenome, idade }) {
    return {
        nome,
        sobrenome,
        idade,
    };
}
console.log(criarPessoa({ nome: 'Maria', sobrenome: 'Oliveira', idade: 28 })) // { nome: 'Maria', sobrenome: 'Oliveira', idade: 28 }
// factory com valores default