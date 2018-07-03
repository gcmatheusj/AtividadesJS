/*
Objeto em javascript não é a mesma coisa que json (javascript object notation);
Coleção de chave e valor;
*/
const prod1 = {}
prod1.nome = 'Celular ultra mega';
prod1.preco = 4998.90;

console.log(prod1)

//Outra forma de declarar um objeto
const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90
}

console.log(prod2);

//Exemplo de json
'{ "nome": "Camisa Polo", "preco": 79.90 }'