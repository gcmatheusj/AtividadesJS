//Coleção dinâmica de pares chave/valor.
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Matheus',
        idade: 22,
        endereco: {
            logradouro: 'Rua Padre Curador',
            numero: 340
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 21
    }, {
        nome: 'Ana',
        idade: 22
    }],
    calcularValorSeguro: function(){
        //..
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua xxx'
console.log(carro)

delete carro.proprietario.endereco
console.log(carro)