function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0

    //Método público utiliza-se o this
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else
            velocidadeAtual = velocidadeMaxima
    }

    //Método público utliza-se o this
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())