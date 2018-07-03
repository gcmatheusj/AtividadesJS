{
    var a = 1 //Não tem escopo de bloco
    let b = 2
    console.log(b)
}
console.log(a)
// console.log(b), se tentar imprimir a variavel b fora do bloco, vai dar erro.

//Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)
const [m, , n] = [1, 2, 3] //Ignorando o elemento '2'
console.log(m, n)

const { idade, nome } = { nome: 'Ana', idade: 22 }
console.log(idade, nome)