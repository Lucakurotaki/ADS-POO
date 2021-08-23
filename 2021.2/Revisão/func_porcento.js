const scanf = require('scanf');

function porcentagem(p, x){
    return (p*x)/100;
}

console.log("Digite o valor de p: ");
var p = scanf('%f');
console.log("Digite o valor de x: ");
var x = scanf("%f");

var valor = porcentagem(p,x);

console.log(`${p}% de ${x} = ${valor}`);
