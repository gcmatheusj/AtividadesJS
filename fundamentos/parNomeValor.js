//Contexto léxico => onde a variável foi definida.

const saudacao = 'Opa'; //Contexto léxico 1.

function exec(){
    const saudacao = 'Falaaa'; //Contexto léxico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor.
const cliente = {
    nome: 'Matheus',
    idade: 22,
    peso: 90,
    endereco: {
        logradouro: 'Rua Padre Curador',
        numero: 340
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);