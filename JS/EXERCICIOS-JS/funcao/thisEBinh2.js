function pessoa() {
    this. idade = 0;

    //jeito errado de usar o this
    setInterval (function() {
        this.idade++; // this é o objeto que chamou a função
        console.log(this.idade);
    }, 1000);
}

new pessoa(); // chama a função pessoa


//jeito certo de usar o this (com bind)
function pessoa2() {
    this.idade = 0;

    //jeito certo de usar o this
    setInterval(function() {
        this.idade++; // this é o objeto que chamou a função
        console.log(this.idade);
    }. bind(this), 1000);
}

new pessoa2(); // chama a função pessoa


// jeito certo de usar o this com uma constante referenciado o primeiro this
function pessoa3() {
    this.idade = 0;

    const self = this; // cria uma variável self que referencia o this do objeto pessoa3
    setInterval(function() {
        self.idade++; // this é o objeto que chamou a função
        console.log(this.idade);
    }, 1000);
}
new pessoa3(); // chama a função pessoa

new pessoa3(); // chama a função pessoa

//jeito certo de usar this usando arrow function
function pessoa4() {
    this.idade = 0;

    //jeito certo de usar o this
    setInterval(() => {
        this.idade++; // this é o objeto que chamou a função
        console.log(this.idade);
    }, 1000);
}

new pessoa4(); // chama a função pessoa