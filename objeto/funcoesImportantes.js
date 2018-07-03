const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//Retorna as chaves(atributos) do objeto.
console.log(Object.values(pessoa))//Retorna os valores das chaves.
console.log(Object.entries(pessoa))//Retorna os registros do objeto em um array composto por subarrays contendo o par chave e valor.

//Utilizando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Define uma nova propriedade(atributo) para o objeto, sendo o primeiro parametro da função o objeto que deseja-se definir a propriedade e o segundo parametro representa a chave.
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //O atributo poderá ser exibido a partir da função Object.keys.
    writable: false, //O atributo não poderá ser reescrito.
    value: '01/01/2018'
})

pessoa.dataNascimento = '01/01/2017' //Nada vai acontecer, por causa do writable: false.
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ES2015) - concatena objetos
const destino = { a: 1}
const o1 = { b: 2}
const o2 = { c : 3, a: 4}
const obj = Object.assign(destino, o1, o2)//O primeiro parametro é o objeto que recebe os demais na concatenação, os ultimos elemenos vão sobreescrevendo se houver atributos com mesmo nome.

console.log(obj)