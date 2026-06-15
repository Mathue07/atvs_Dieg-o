const ler = require("readline-sync");

let letra = ler.question("Escreva uma letra: ")
let pal = ler.question("Digite a palavra: ")

function contarletras(pal, letra){
       let cont = 0
       for(let i = 0; i < pal.length; i++){
        if(pal[i] === letra){
            cont++
        }
       }
       return cont
}

console.log(contarletras(pal, letra))