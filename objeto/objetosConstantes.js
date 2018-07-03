//pessoa (nome da constante) -> 123 (endereco de memoria) -> {...} (objeto).
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Matheus'
console.log(pessoa)

/*
pessoa -> 456 -> {...} 
pessoa = { nome: 'Ana' } - não se pode atribuir um novo objeto a uma constante.
*/

Object.freeze(pessoa)//O objeto não podera ser modificado.

pessoa.nome = 'Maria' //Nada irá acontecer.
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
console.log(pessoaConstante)