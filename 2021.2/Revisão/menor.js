const scanf = require('scanf');

console.log("Escreva o primeiro valor: ");
const val1 = scanf('%d');
console.log("Escreva o segundo valor: ");
const val2 = scanf('%d');
console.log("Escreva o terceiro valor: ");
const val3 = scanf('%d');

var menor = 0;

if (val1 < val2) {
    if (val1 < val3) {
        menor = val1;
    }else{
        menor = val3;
    }
}else{
    if (val2 < val3) {
        menor = val2;
    }else {
        menor = val3;
    }
}

console.log(`O menor valor é ${menor}`);