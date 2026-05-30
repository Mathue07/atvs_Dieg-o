const input = require("readline-sync");

const secreto = 47
let tentativas = 0
let chute = 0

while(true){
    chute = input.question("Digite o numero suuuuuper secreto: ")
    tentativas = tentativas + 1;

    if(chute == secreto){
        console.log(`Parabens! Voce acertou o numero secreto em ${tentativas} tentativas!`)
    break;
    }
    else if(chute > secreto){
        console.log("O numero secreto eh menor")
    }
    else{
        console.log("O numero secreto eh maior")
    }
}

