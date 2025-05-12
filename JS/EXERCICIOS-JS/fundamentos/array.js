const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // acessando os valores do array
console.log(valores[4]) // undefined        
valores[4] = 10 // adicionando um valor ao array
console.log(valores)    
console.log(valores.length) // length é uma propriedade do array
valores.push({id: 3}, false, null, 'teste') // adicionando valores de diferentes tipos ao array
console.log(valores)
console.log(valores.pop()) // remove o último elemento do array
delete valores[0] // remove o elemento na posição 0 do array
console.log(valores)
console.log(typeof valores) // typeof é um operador que retorna o tipo do valor
console.log(typeof valores[0]) // typeof é um operador que retorna o tipo do valor
console.log(typeof valores[1]) // typeof é um operador que retorna o tipo do valor
console.log(typeof valores[2]) // typeof é um operador que retorna o tipo do valor