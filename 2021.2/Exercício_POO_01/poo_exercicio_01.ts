/* 
1. Classes são os modelos que servem de base para a construção dos objetos. Geralmente possuem 
atributos e/ou métodos que servem para determinar estados e comportamentos dos objetos criados a 
partir da classe. Já os objetos são analogias a elementos do mundo real, possuem métodos e/ou 
atributos e são criadas a partir de classes instanciadas. 

2. Atributos definem a característica, propriedade e estados de um objeto. Já os métodos definem os
comportamentos do objeto, seja dele mesmo ou de outros objetos, e ainda são geralmente responsáis
pela alteração dos atributos.

3.  Peso: Calculadora de IMC | Calculadora de média de altura
    Tipo de CNH: Sistema de multas do DETRAN | Cadastro dos pilotos de uma companhia aérea
    Tipo sanguíneo: Cadastro de doadores de sangue | Cadastro de usuários de uma bibliteca
    Habilidade destra: Características dos jogadores em um videogame de futebol | Reprodutor de vídeo
    Percentual de gordura: Software de análise fisiológica de um atleta profissional | Site de compras online
    Saldo em conta: Sistema de um banco | Verificador de problemas no sistema operacional
    Etnia: Cadastro de ENEM | Leitor de código de barras

4.  a. Não, pois limitaria o alcance de ações do objeto Conta a uma pessoas específica.
    b. Sim, pois na vida real existe a possibilidade de uma pessoa possuir mais de uma conta. O elemento
    da programação estruturada que melhor representaria seria um array.

5.  1 - Disciplina
    2 - Horário
    3 - Boletim
    4 - Professor
    5 - Calendário

6.  Personagem (atrb: nome, vida, forçaAtaque, qtdMagia, forçaMagia, tipoArma, arma) (metds: trocarArma, aumentarMagia), 
    Arma (atrb: tipoArma, forçaAtaque, nome, id), pocaoMagia (atrb: tipoPocao, atdMagia, nome, id)

7.
*/

class Retangulo {
    l1: number;
    l2: number;

    calculaArea(): number {
        return this.l1 * this.l2;
    }

    calculaPerimetro(): number {
        return this.l1*2 + this.l2*2;
    }
}

let retangulo : Retangulo;
retangulo = new Retangulo();

retangulo.l1 = 10;
retangulo.l2 = 20;

console.log(retangulo.calculaArea());
console.log(retangulo.calculaPerimetro());

//8.

class Circulo {
    raio: number;

    calculaArea(): number {
        return (this.raio*this.raio)*3.14;
    }

    calculaPerimetro(): number {
        return this.raio*2*3.14;
    }
}

let circulo: Circulo;
circulo = new Circulo();

circulo.raio = 10;

console.log(circulo.calculaArea());
console.log(circulo.calculaPerimetro());

//9.

class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    saldo() {
        return this.valorCreditos-this.valorDebitos;
    }
}

let situacao: SituacaoFinanceira;
situacao = new SituacaoFinanceira();

situacao.valorDebitos = 1000;
situacao.valorCreditos = 3000;

console.log(situacao.saldo());
