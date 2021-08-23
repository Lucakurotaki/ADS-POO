var scanf = require('scanf');

console.log("Digite o valor em dólar: ");
const dolar = scanf('%f');

const real = dolar*5.38;

console.log(`US$ ${dolar} = R$ ${real}`);