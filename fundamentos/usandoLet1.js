//Varáveis definidas com a palavra reservada let, tem escopo global e escopo de função e escopo de bloco.
var numero = 1;
{
    let numero = 2;
    console.log('Dentro = ', numero);
}
console.log('Fora = ', numero);