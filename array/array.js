//Array em js é uma estrutura dinâmica, ou seja, cresce e diminue dinamicamente, é também uma estrutura heterogência.
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//Elemento undefined no array

aprovados[3] = 'Pedro'
aprovados.push('Abia')//Adiciona um elemento ao ultimo indice do array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

//Função .sort - ordena o array
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

//Este metodo pode deletar e adicionar elementos ao array ao msm tempo
aprovados.splice(1, 1)//O primeiro parametro é o indice que voce quer excluir e o segundo parametro é a quantidade de elementos que deseja excluir a partir do indice passado.
console.log(aprovados)