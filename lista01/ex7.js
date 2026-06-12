const input = require("readline-sync");

let soma = 0
let num = 50

for(let i = 1; i <= 50; i++){
    num--;
    if(num %2 === 0){
        soma = soma + i;
    }
}

console.log(`${soma}`);