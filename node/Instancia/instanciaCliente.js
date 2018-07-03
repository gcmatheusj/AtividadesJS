const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //Neste caso, o require retorna uma função, então deve ser utilizar os '()' no final para retornar o objeto.
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //O node faz cache do objeto, logo contadorA e contadorB terão o msm valor, por serem uma instancia única.

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //Neste caso os valores dos contadores serão diferentes, pois são instancias diferentes.