const nums = [1, 2, 3, 4, 5]

//O map é um for com propósito
const resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`

const resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado2)