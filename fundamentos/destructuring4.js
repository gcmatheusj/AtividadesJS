//Desestruturando um array
function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
//Entre 50~40.
console.log(rand([50, 40]));
//Valor min.
console.log(rand([992]));
//Valor max.
console.log(rand([, 10]));
//Sem declarar valores.
console.log(rand([]));
