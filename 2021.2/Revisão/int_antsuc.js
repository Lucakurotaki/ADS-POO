var scanf = require('scanf');

console.log("Digite um número: ");
const i = scanf('%d');

const a = i-1;
const s = i+1;

console.log(`Número: ${i}\nAntecessor: ${a}\nSucessor: ${s}`);