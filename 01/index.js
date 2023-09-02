const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const numerosD = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const numerosU = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
const frutasC = ["Banana", " Amora", "abacaxi", "uva", "Pera"]

const numerosCres = numeros.sort((a, b)=>{
    return a - b
})

const numerosDec = numerosD.sort((a, b)=>{
    if(a > b){
        return -1
    }else if(a < b){
        return 1
    }else{
        return 0
    }
})

numerosU.sort()

const frutasAlfa = frutas.sort((a, b)=>{
    a = a.toLowerCase();
    b = b.toLowerCase();

    if(a > b){
        return 1
    }else if(a < b){
        return -1
    }else{
        return 0
    }
    
})

const frutasCres = frutasC.sort((a, b)=>{
    if(a.length < b.length){
        return 1
    }else if(a.length > b.length){
        return -1
    }else{
        return 0
    }
})


console.log(numerosCres)
console.log(numerosDec)
console.log(numerosU)
console.log(frutasAlfa)
console.log(frutasCres)


