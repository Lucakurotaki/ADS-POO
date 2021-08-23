const scanf = require('scanf');

console.log("Insira um string: ");
var s = scanf('%S');

console.log("Digite o valor de 'a': ");
var a = scanf('%s');
console.log("Digite o valor de 'b': ");
var b = scanf('%s');

var novo = ""

for (var i = 0; i < s.length; i++){
    if (s[i] == a){
        novo += b;
    }else{
        novo += s[i];
    }
}

console.log("String com substituição: ", novo);