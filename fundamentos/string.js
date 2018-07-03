const escola = "ufal"

//Imprime a letra referente ao indice passado como parâmetro.
console.log(escola.charAt(3))

/*
Imprime o valor da tabela ascii da letra 
referente ao indice passado com parâmetro.
*/
console.log(escola.charCodeAt(3))

//Imprime a string a partir do indice passado como parâmetro.
console.log(escola.substring(1))

//Concatenação de string.
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola +'!')

//Substituição de caracter.
console.log(escola.replace(2, 'e'))

//Criar array de strings.
console.log('Ana,Maria,Pedro'.split(','))