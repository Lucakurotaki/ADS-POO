//1.

let listaNum: Array<number> = [1,23,45,57,98];

let somaNum = 0;

for (let i = 0; i < listaNum.length; i++){
    somaNum += listaNum[i];
}

console.log(somaNum);


//2.

/* O código imprime todos os números na sequência dos índices, porém como a estrutura de repetição
só é encerrada quando o i for igual à quantidade de elementos do array, ou seja, i=5, e não há
índice 5 no array, pois ele começa com 0 e termina com 4, o código imprime também o valor "undefined".
*/


//3.

let listaDezNum: Array<number> = [90, 23, 4, 87, 200, 34, 56, 7, 543, 1];

var ordemCresc = (lista: Array<number>) =>{
    let menor = 0;

    for (let i = 0; i < lista.length; i++){
        let atualMenor = lista[0];

        for(let j = 0; j < lista.length; j++){
            if((lista[j] < atualMenor) && (lista[j] > menor)){
                atualMenor = lista[j];
            }
        }

        console.log(atualMenor);

        menor = atualMenor;
    }
}

ordemCresc(listaDezNum);