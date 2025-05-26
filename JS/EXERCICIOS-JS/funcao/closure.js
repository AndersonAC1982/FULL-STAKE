/*closure é  o escopo criado quando uma função é declarada, 
 permitindo que a função acesse variáveis de seu escopo externo
 mesmo após o término da execução desse escopo.*/

 //contexto léxico em ação	

const valor = 'Global';

function fora(){
    const x = 'Local';
    function dentro(){
        return x;
    }
    return dentro;

}
const minhaFuncao = fora();
console.log(minhaFuncao()); // Local

 