const valor = 'Global';

function minhaFuncao() {// A função `minhaFuncao` acessa a variável `valor` do escopo global
   console.log(valor);// A função imprime o valor da variável `valor` que está no escopo global
}

function exec() {// A função `exec` é definida para executar a função `minhaFuncao`
    // A função `exec` define uma variável `valor` no seu escopo local
    const valor = 'Local';// A variável `valor` no escopo local tem precedência sobre a variável `valor` do escopo global
    minhaFuncao();// A função `minhaFuncao` é chamada, mas ela acessa a variável `valor` do escopo global, não do escopo local
}
exec(); // Global
// A função `minhaFuncao` captura o valor da variável `valor` do contexto léxico onde foi definida, que é o escopo global.