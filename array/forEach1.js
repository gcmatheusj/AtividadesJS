const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Função callback dentro do forEach contem apenas 3 parametros: nome, indice e array.
aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})

console.log('')
aprovados.forEach(nome => console.log(nome))
console.log('')

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)