const escola = "Cod3r";
console.log(escola.charAt(4)); // r  retorna o caractere no índice 4
console.log(escola.charAt(5)); // undefined não existe
console.log(escola.charCodeAt(3)); // 51 da tabela unicode
console.log(escola.indexOf('3')); // 3 retorna o índice do caractere 3 
console.log(escola.substring(1)); // od3r retorna a string a partir do índice 1
console.log(escola.substring(0, 3)); // Cod retorna a string do índice 0 até o índice 3

console.log('Escola '.concat(escola).concat("!")); // Escola Cod3r!
console.log(escola.replace(3, 'e')); // Cod3r -> Coder replace troca o caractere 3 por e
console.log('Ana,Maria,Pedro'.split(',')); // [ 'Ana', 'Maria', 'Pedro' ] split separa a string em um array
