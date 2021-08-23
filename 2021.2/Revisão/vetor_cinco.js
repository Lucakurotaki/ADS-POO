const scanf = require('scanf');

var vetor = [];

for (var i = 0; i < 6; i++){
    console.log(`Insira o ${i+1}° número do vetor: `);
    var elemento = scanf('%d');
    var adic = vetor.push(elemento);
}

console.log(vetor);