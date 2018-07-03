const tecnologias = new Map()
tecnologias.set('react', { framewwork: false })
tecnologias.set('angular', { framewwork: true })
console.log(tecnologias.get('react').framewwork)

const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)