//Implementando map
Array.prototype.map2 = function(callBack){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(callBack(this[i], i, this))
    }
    return novoArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

//Retornar um array apenas com os precos
const resultado = carrinho.map2(function(e){
    const obj = JSON.parse(e)
    return `preco: ${obj.preco}`
})

console.log(resultado)