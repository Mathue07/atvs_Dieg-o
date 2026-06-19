const ler = require("readline-sync");

let inicio = Number(ler.question("Digite um num: "))
let fim = Number(ler.question("Digite outro num: "))

function range(inicio, fim){
    let lista = []
    for(let i = inicio; i <= fim; i++){
        lista.push(i)
    }
    return lista
}

function soma(lista){
    let som = 0
    for(let i = 0; i < lista.length; i++){
        som += lista[i];
    }
    return som
}

console.log(`${range(inicio, fim)}`)
console.log(soma(range(inicio, fim)))