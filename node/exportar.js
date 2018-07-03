console.log(module.exports) //Objeto vazio
console.log(module.exports === this) //Verdadeiro
console.log(module.exports === exports) //Verdadeiro

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null //Nao vai acontecer nada.
console.log(module.exports)

//Não vai acontecer nada
exports = {
    nome: 'Teste'
}
//O this e o exports são duas referencias para o mesmo objeto que module.exports aponta.
console.log(module.exports)
module.exports = {
    publico: true
}