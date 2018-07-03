const notas = [7.1, 8.5, 6, 4, 9.1]

//sem callback
const notasbaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasbaixas1.push(notas[i])
    }
}

console.log(notasbaixas1)

//com callback
const notasbaixas2 = notas.filter(function(notas){
    return notas < 7
})

console.log(notasbaixas2)

//com callback arrow 
const notasbaixas3 = notas.filter(notas => notas < 7)
console.log(notasbaixas3)