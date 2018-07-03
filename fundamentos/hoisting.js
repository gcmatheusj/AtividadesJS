//Hoisting -> Variaveis var que são jogadas para cima.
console.log('a =', a);
var a = 2;
console.log('a =', a);

//Equivalente ao código a cima.
var a;
console.log('a =', a);
var a = 2;
console.log('a =', a);

//Hoisting acontece também dentro de funções.
function teste(){
    console.log('a =', a);
    var a = 2;
    console.log('a =', a); 
}

teste();

//Hoisting não ocorre com variaveis let.