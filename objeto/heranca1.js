const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//Todo objeto tem uma referencia para o seu protótipo
console.log(ferrari.prototype)//prototype esta indefinido para objeto.
console.log(ferrari.__proto__)//Utiliza-se 2 underline proto 2 underline para retornar o objeto prototipo.
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__)
console.log(volvo.__proto__ === Object.prototype)//É verdadeiro
console.log(Object.prototype.__proto__ === null)//É verdadeiro