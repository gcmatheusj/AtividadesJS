//Para executar o comando 'dev' do package.json utiliza-se: npm run dev.

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
//Axios é um client http e faz requisições para obter informações de algo que está remoto.
const axios = require('axios')

//Desafio - encontrar mulher chinesa com menor salario
axios.get(url).then(response => {
    const funcionarios = response.data
    const china = funcionarios.filter(f => f.pais === 'China')
    const mulher = china.filter(f => f.genero === 'F')
    const salario = mulher.reduce((funcionario, funcionarioAtual) => {
        return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
    }) 
    
    console.log(salario)
})

//Versao da aula - Desafio
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionarioMenorSalario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(funcionarioMenorSalario)
})