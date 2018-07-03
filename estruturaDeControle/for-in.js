const notas = [6, 6.5, 8, 9.5]

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: '64kg'
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}