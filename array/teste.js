const inputArray = [3, 6, -2, -5, 7, 3]

const maiorPar = (resultado, numero) => resultado > numero
const produto = (resultado, numero) => resultado * numero
console.log(inputArray.reduce(maiorPar))

