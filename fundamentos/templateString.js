const nome = 'Matheus'
const concatenacao = 'Ola' + nome + '!'

{
//Template String utilizando ` ` (crase).
const template = `Olá ${nome}!`
console.log(template)

//Expressões...
console.log(`1 + 1 = ${1 + 1}`)
}

//Função Arrow
const up = texto => texto.toUpperCase() //Transforma a string em MAIUSCULA.
console.log(`Ei... ${up(`cuidado`)}!`)