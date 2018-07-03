function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40 }

//Utilizar objeto como parâmetro.
console.log(rand(obj));
console.log(rand({ min: 955}));
console.log(rand({}));

/*Vai dar erro, pois não passa nenhum objeto como parametro.
console.log(rand());
*/