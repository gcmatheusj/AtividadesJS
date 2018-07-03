function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Ola ').then(frase => frase.concat('Matheus!')).then(novafrase => console.log(novafrase))