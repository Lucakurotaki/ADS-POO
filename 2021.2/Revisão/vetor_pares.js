const scanf = require('scanf');

var vetor = [];

for (var i = 0; i < 21; i++){
    console.log(`Insira o ${i+1}° número do vetor: `);
    var elemento = scanf('%d');
    var adic = vetor.push(elemento);
}

console.log(vetor);

var pares = 0;

for (var j = 0; j < vetor.length; j++){
    if (vetor[j]%2==0){
        pares++;
    }
}

console.log(`O vetor contém ${pares} valores pares.`);