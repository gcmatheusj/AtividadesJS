function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 1989.49))
console.log(criarProduto('Celular', 2000.49))