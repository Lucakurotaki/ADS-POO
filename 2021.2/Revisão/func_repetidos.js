const scanf = require('scanf');

function repetidos (n,d){
    var n = n;
    var d = d;
    var rep = 0;

    var copia = n;

    while (copia >= d){
        var resto = copia%10;
        copia = (copia-resto)/10;
        if (resto == d){
            rep++;
        }
    }

    return rep;
}

console.log("Escreva um número: ");
var num = scanf('%d');
console.log("Escreva um dígito: ");
var dig = scanf('%d');

console.log(repetidos(num,dig));