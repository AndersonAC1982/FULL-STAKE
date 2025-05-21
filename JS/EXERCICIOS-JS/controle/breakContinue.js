const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if (x == 5) { //enquento o valor de x for igual a 5
        break // Para o loop
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) { //enquento o valor de y for igual a 5
        continue // Pula o loop ou seja o 5
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:for (a in nums) { // quanto o para for igual a 2 e o b for igual a 3
    // O loop externo (externo é um rotulo)
    for (b in nums) {
        if (a == 2 && b == 3) break externo // Para o loop externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!') // Fim do loop