const input = require('readline-sync');

let num = 0

for(let i = 0; i <= 99; i++){
    num++

    if(num %5 === 0 && num %3 === 0){
        console.log("FizzBuzz")
    }

    else if(num %3 === 0){
        console.log("Fizz")
    }

    else if(num %5 === 0){
        console.log("Buzz")
    }

    else{
        console.log(`${num}`)
    }
}