const input = require('readline-sync');

function validSenha(senha){
  return senha.length >= 8
}

let senha = input.question("Digite a senha: ")

  if (validSenha(senha)) {
    console.log('Senha valida')
  }

    else {
    console.log('Senha fraca - minimo 8 caracteres')
    }