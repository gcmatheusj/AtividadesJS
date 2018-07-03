let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //Return iplícito.

console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá!'
}

ola = () => {
    return 'Olá!'
}

ola = () => 'Olá!'

console.log(ola())