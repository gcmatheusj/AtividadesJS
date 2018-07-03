const obj = {
    a : 1,
    b: 2,
    c: 3,
    soma(){
        return a + b + c
    }
}

console.log(JSON.stringify(obj)) //transforma um objeto em json
const e = '{"a": 1, "b": 2, "c": 3}'
console.log(JSON.parse(e)) //transforma o json em objeto.
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))