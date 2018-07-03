const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo elemento do array - 'Massa'.
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona o elemento na ultima posição do array.
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do array - 'Vettel'.
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona o elemento no inicio do array.
console.log(pilotos)

//Splice pode adicionar e remover elementos
//Adcionando com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Removendo com splice
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Slice cria um novo array a partir de um array existente.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Cria um novo array a partir do indice 1 e o indice 4 não sera incluso, no caso 'Verstappen'
console.log(algunsPilotos2)