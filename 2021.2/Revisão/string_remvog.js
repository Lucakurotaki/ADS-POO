const scanf = require('scanf');

console.log("Escreva um texto: ");
var texto = scanf('%S');

const vogais = ['a','e','i','o','u','A','E','I','O','U'];

var novo = "";

for (var i=0; i < texto.length; i++){
    var vogal = 0;
    for (var j = 0; j < vogais.length; j++){
        if (texto[i] == vogais[j]){
            vogal = 1;
        }
    }
    if (vogal == 0){
        novo += texto[i];
    }
}

console.log("O texto com os vogais removidos: ", novo);