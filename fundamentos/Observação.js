let a = 3 //Variável local dentro deste arquivo e não é exportada.

global.b = 123
this.c = 456
this.d = false
this.d = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) //Verdadeiro.
console.log(module.exports)

//Criando uma variavel sem var e let!

abc = 3 //Evitar esse tipo de declaração.
console.log(global.abc)