//Novo recurso do ES2015(EcmaScript).
const pessoa = {
    nome: 'Matheus',
    idade: 22,
    endereco: {
        logradouro: 'Rua Padre Curador',
        numero: 340,
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);
