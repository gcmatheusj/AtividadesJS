//Arguments é um array que armazena os parametros de uma função.
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 4))

console.log(soma(1, 2, "Teste"))
console.log(soma("b", "a", "Teste"))
