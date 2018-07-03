//Operador ... rest(juntar)/spread(espalhar)
//Usar rest como parâmetro de função

//Usar spread com objeto
const functionario = {
    nome: 'Maria',
    salario: 12348.99
}
const clone = {
    ativo: true,
    ...functionario
}
console.log(clone)

//Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)