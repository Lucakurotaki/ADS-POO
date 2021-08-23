const scanf = require('scanf');

var e = 0;
var soma = 0;

while (e != -1){
    soma += e;
    console.log("Digite um número: ");
    e = scanf('%d');
}

console.log("A soma dos números: ", soma);