let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//Isto não funciona pois a ArrowFunction não permite a mudança de contexto do this.
comparaComThisArrow = comparaComThisArrow.bind(obj) 
comparaComThisArrow(obj)//Vai dar falso