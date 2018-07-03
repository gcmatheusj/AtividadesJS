const fileSystem = require('fs') //Importando file system do node
const caminho = __dirname + '/arquivo.json'

//Sincrono.
const conteudo = fileSystem.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assincrono.
fileSystem.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//Fazendo leitura de uma pasta
fileSystem.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})