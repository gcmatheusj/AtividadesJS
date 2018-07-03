let valor //não inicializada
console.log(valor);

/* 
NULL-> a variavel não está apontando para nenhum endereço de memória
UNDEFINED-> utilizado quando uma variável não teve valor atribuido
*/
valor = null
console.log(valor);
// console.log(valor.toString()) -> Da erro!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);