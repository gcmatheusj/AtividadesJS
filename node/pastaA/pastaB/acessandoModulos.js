//Caminho relativo - '../' indica que você está saindo de uma pasta
const moduloA = require('../../Sistema de Modulos/moduloA')
console.log(moduloA.bemVindo)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola)

/*const http = require('http')
http.createServer((req, res) => {
    res.write('Ola safadao pequeno!')
    res.end()
}).listen(8080)
*/