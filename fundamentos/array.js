/*
O array em javascript é heterogêneo;
Num mesmo array você pode colocar numeros, string;
O array não possui tamanho fixo;
*/

const valores = [7.7, 'Matheus', 6.3, 9.2]
console.log(valores[1], valores[3])
console.log(valores[4])

//Push para adicionar. 
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Função pop retornar a ultima posição do array e retira do array o valor retornado.
console.log(valores.pop())

//Deletando valores do array
delete valores[0]
console.log(valores)

console.log(typeof valores) //Array em JavaScript é um objeto.

