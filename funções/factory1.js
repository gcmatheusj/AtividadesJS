//Factory simples
function criarPessoa(){
    return{
        nome: 'Flavia',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarPessoa2(sexo){
    if(sexo === 'feminino'){
        return{
            nome: 'Ana',
            sobrenome: 'Luiza'
        }
    }else if(sexo === 'masculino'){
        return{
            nome: 'Matheus',
            sobrenome: 'Castro'
        }
    
    }    
}

console.log(criarPessoa2('masculino'))