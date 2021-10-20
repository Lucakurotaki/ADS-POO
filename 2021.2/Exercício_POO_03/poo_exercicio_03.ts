/*
1.  Não, pois como a variável inteira é um atributo, mesmo não sendo inicializada explicitamente,
    é reconhecido como "undefined" e não haverá erro de compilação.

2. 
*/

class Hotel {
    quantReservas : number;

    constructor(quantReservas : number){
        this.quantReservas = quantReservas;
    }

    adicionarReserva(): void {
        this.quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);

/*
3.  O erro de compliação é devido à ausência de argumento no parâmetro da instanciação do objeto "r".
    A solução seria inicializar o atributo pelo parâmetro.
*/

class Radio {
    volume : number;
    constructor(volume : number){
        this.volume = volume;
    }
}

let r : Radio = new Radio(10);

/*
4.  a. Ambos os prints mostrarão saldo de 90. Isso se deve ao fato de que, ao fazer a atribuição
    c1 = c2, as duas varíaveis passam a referenciar o mesmo objeto, ou seja, o que originalmente era
    referenciado somente pela c2. Então, o saque é feito normalmente, diminuindo o saldo de 100 para
    90, mas a transferência não ocorre na prática, porque é entre o mesmo objeto.

    b. Deixa de ser usado, e mais tarde o espaço da memória será liberado pelo Garbage Collector.

5.
*/

class Jogador {
    forca : number;
    nivel : number;
    ptsAtuais : number;

    constructor(forca : number, nivel : number, ptsAtuais : number){
        this.forca = forca;
        this.nivel = nivel;
        this.ptsAtuais = ptsAtuais;
    }

    ptsAtaque() : number{
        return this.forca * this.nivel;
    }

    ataque(adversario : Jogador): void{
        adversario.ptsAtuais -= this.ptsAtaque();
    }
}

let j1 : Jogador = new Jogador(40,60,10000);
let j2: Jogador = new Jogador(30,35,15000);

j1.ataque(j2);
j2.ataque(j1);

console.log(j1.ptsAtuais);
console.log(j2.ptsAtuais);

//6.

class Conta {
    numero: String;
    saldo: number;

    constructor(num : String, saldoInicial: number){
        this.numero = num;
        this.saldo = saldoInicial;
    }

    //6-a
    sacar(valor : number): boolean{
        if(this.consultarSaldo() < valor){
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;

    }

    depositar(valor: number): void{
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    //6-b Sim. É mais seguro chamar outros métodos.
    //6-c
    transferir(contaDestino: Conta, valor: number): boolean{
        if(this.consultarSaldo() < valor){
            return false;
        }

        this.sacar(valor);
        contaDestino.depositar(valor);
        return true;
    }
}

//6-d
let c1 : Conta = new Conta("1",1000);
let c2: Conta = new Conta("2", 2000);

c1.sacar(1001);
c2.depositar(500);

c2.transferir(c1, 3000);

c1.transferir(c2, 100);

console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());

//7
class Produto{
    codigo : String;
    descricao : String;
    valor : number;
    quantidade : number;
    quantidadeMinima : number;

    constructor(cod: String, desc : String, valor : number, quantidade : number, qMinima: number){
        this.codigo = cod;
        this.descricao = desc;
        this.valor = valor;
        this.quantidade = quantidade;
        this.quantidadeMinima = qMinima;
        
    }

    baixar(quantidade : number): boolean{
        if(quantidade > this.quantidadeMinima){
            return false;
        }

        this.quantidade-=quantidade;
        return true;
    }

    repor(quantidade : number): void{
        this.quantidade+=quantidade;
    }

    reajusta(taxa : number): void{
        this.valor += this.valor*taxa/100;
    }

    toString(): String{
        let texto = "";

        let codigo = "Código: " + this.codigo;
        let descricao = "Descrição: " + this.descricao;
        let valor : String = "Valor: " + this.valor.toString();
        let quantidade : String = "Quantidade: " + this.quantidade.toString();
        let quantidadeMinima : String = "Quantidade Mínima: " + this.quantidadeMinima.toString();

        let lista = [codigo, descricao, valor, quantidade, quantidadeMinima];


        for(let i in lista){
            texto += lista[i];
            texto += "\n";
        }
        
        return texto;
    }

    equals(produto : Produto): boolean{
        if(this.codigo != produto.codigo){
            return false;
        }

        return true;
    }
}

let p1: Produto = new Produto("1","Maçã",4, 10, 5);
let p2: Produto = new Produto("2","Banana",2, 20, 8);
let p3: Produto = new Produto("1","Pera",11, 8, 3);

p1.baixar(6);
p2.baixar(5);
p3.repor(7);

p1.reajusta(50);

console.log(p1.equals(p2));
console.log(p1.equals(p3));

console.log(p1.toString());
console.log(p2.toString());
console.log(p3.toString());