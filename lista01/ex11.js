const ler = require("readline-sync")

let idade = ler.question("Qual sua idade peniana?: ")

function pdvotar(idade){
    if(idade >= 16){
        console.log("Pode votar por causa da sua idade peniana")
    }

    else{
        console.log("Não pode votar devido sua baixa idade peniana")
    }
    return idade
}

console.log(`${pdvotar(idade)}`)