const alunos = [
    { nome: 'Matheus', nota: 7.9 },
    { nome: 'Ana', nota: 9.2 }
]

//Imperativo - focado nos detalhes
let valorTotal = 0
for(let i = 0; i < alunos.length; i++){
    valorTotal += alunos[i].nota
}
console.log(valorTotal / alunos.length)

//Declarativo - não é focado nos detalhes
const alunoNota = alunos => alunos.nota
const soma = (total, nota) => total + nota

const total = alunos.map(alunoNota).reduce(soma)
console.log(total / alunos.length)