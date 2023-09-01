const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const MaiorString = cidades.reduce((acumulador, elementoAtual, indice, array)=>{
  let maior = acumulador
    if(maior.length < elementoAtual.length){
        maior = elementoAtual
    }
    return maior

})

console.log(MaiorString)