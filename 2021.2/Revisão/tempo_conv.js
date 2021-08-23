const scanf = require('scanf');

function conversao (tempo){
    var hora = Math.round(tempo/3600);
    var minuto = Math.round(tempo%3600/60);
    var segundo = Math.round((tempo%3600)%60);

    var final = `${hora}:${minuto}:${segundo}`;

    return final;
}

console.log("Digite o tempo em segundos: ");
var ts = scanf("%d");

console.log(conversao(ts));