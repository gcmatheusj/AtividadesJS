console.log(this === global) //É falso.
console.log(this === module) //É falso.

console.log(this === module.exports) //É verdade.
console.log(this === exports) //É verdade.

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === module.exports) //Dentro de uma função é falso.
    console.log(this === exports) //Dentro de uma função é falso.
    console.log(this === global) //Dentro de uma função é verdadeiro.
    this.nome = 'Matheus' //Nesse caso o this aponta pra global
}

logThis()