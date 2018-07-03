function Pessoa(){
    this.idade = 0

    const Self = this
    setInterval(function(){
        Self.idade++
        console.log(Self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa