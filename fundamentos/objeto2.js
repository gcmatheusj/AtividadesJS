console.log(typeof Object);//Função
console.log(typeof new Object); //Objeto

const cliente = function(){}
console.log(typeof cliente); //Função
console.log(typeof new cliente); //Objeto

class Produto{} //ES 2015 (ES6)
console.log(typeof Produto); //Função
console.log(typeof new Produto); //Objeto