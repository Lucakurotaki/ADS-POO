function exibir(...textos : string[]){
    let resultado: string = '';

    for (let texto of textos){
        resultado += texto;
        resultado += ' '
    }

    return resultado;
}

console.log(exibir('a'));
console.log(exibir('a','b'));
console.log(exibir('a','b','c'));
console.log(exibir('a','b','c','d'));