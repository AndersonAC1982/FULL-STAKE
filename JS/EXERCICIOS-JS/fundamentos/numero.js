const peso1 = 1.0
const peso2 = Number('2.0') // Number() converte string para number
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Number.isInteger() verifica se o número é inteiro
console.log(Number.isInteger(peso2)) // Number.isInteger() verifica se o número é inteiro
const avaliacao1 = 9.871
const avaliacao2 = 6.871   
const total = peso1 * avaliacao1 + peso2 * avaliacao2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // toFixed() formata o número com 2 casas decimais
console.log(media.toString()) // toString() converte o número para string
console.log(media.toString(2)) // toString(2) converte o número para string em binário
console.log(typeof media) // typeof() verifica o tipo da variável
console.log(typeof Number) // typeof() verifica o tipo da variável
console.log(typeof String) // typeof() verifica o tipo da variável

/* resultados
1 2
true
true
7.87
7.8709999999999996
111.11011110111110011101101100100010110100001110010101
number
function
function
*/  