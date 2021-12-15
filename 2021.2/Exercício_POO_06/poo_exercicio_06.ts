//1.
class Veiculo{
    placa: string;
    ano: number;
}

class Carro extends Veiculo{
    modelo: string;
}

class CarroEletrico extends Carro{
    autonomiaBateria: number;
}

//2.
class Calculadora{
    private _op1: number;
    private _op2: number;

    constructor(op1: number, op2: number){
        this._op1 = op1;
        this._op2 = op2;
    }

    get op1(): number{
        return this._op1;
    }

    get op2(): number{
        return this._op2;
    }

    adicionar(): number{
        return this._op1+this._op2;
    }
}

let calculo: Calculadora = new Calculadora(10,35);
console.log(calculo.adicionar());


//3.
class CalculadoraCientifica extends Calculadora{
    exponenciar():number{
        return this.op1**this.op2;
    }
}

let calculoCientifico: CalculadoraCientifica = new CalculadoraCientifica(2,3);
console.log(calculoCientifico.exponenciar());

//Foi necessário adicionar métodos get para que o método da subclasse funcionasse.

//4.
class Produto{
    private _id: string;
    private _descricao: string;
    private _quantidade: number;
    private _valor: number;

    constructor(id: string, descricao: string, quantidade: number, valor: number){
        this._id = id;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get id(): string{
        return this._id;   
    }

    get descricao(): string{
        return this._descricao;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    repor(qtd): void{
        this._quantidade += qtd;
    }

    darBaixa(qtd): void{
        this._quantidade -= qtd;
    }
}

class ProdutoPerecivel extends Produto{
    private _dataValidade: Date;

    constructor(id: string, descricao: string, quantidade: number, valor: number, ano: number, mes: number, dia: number){
        super(id, descricao, quantidade, valor);
        this._dataValidade = this.converterData(ano, mes, dia);
    }

    converterData(ano, mes, dia): Date{
        let data: Date = new Date(ano, mes, dia);
        return data;
    }

    get dataValidade(): Date{
        return this._dataValidade;
    }
}

class Estoque{
    private produtos: Produto[] = [];

    inserir(produto: Produto):void{
        if(this.consultar(produto.id)==null){
            this.produtos.push(produto);
        }
    }

    consultar(id: string): Produto{
        let produtoConsultado: Produto;
        for(let produto of this.produtos){
            if(produto.id == id){
                produtoConsultado = produto;
                break;
            }
        }

        return produtoConsultado;
    }

    indice(id: string): number{
        let indice: number = -1;

        for(let i: number = 0; i < this.produtos.length; i++){
            if(this.produtos[i].id == id){
                indice = i;
                break;
            }
        }

        return indice;
    }

    excluir(id: string): void{
        let indice: number = this.indice(id);

        if(indice != -1){
            for(let i: number = indice; i < this.produtos.length; i++){
                this.produtos[i] = this.produtos[i+1];
            }

            this.produtos.pop;
        }
    }

    repor(id, qtd): void{
        let indice = this.indice(id);

        if(indice != -1){
            this.produtos[indice].repor(qtd);
        }
    }

    darBaixa(id, qtd): void{
        let indice = this.indice(id);

        if(indice != -1){
            this.produtos[indice].darBaixa(qtd);
        }
    }

    listarVencidos(): string{
        let lista = '';
        let agora: number = Date.now();
        let dataAtual: Date = new Date(agora);

        for(let i: number = 0; i < this.produtos.length; i++){
            let produto: ProdutoPerecivel = <ProdutoPerecivel> this.produtos[i];
            if(produto.dataValidade != null){
                if(produto.dataValidade < dataAtual){
                    lista += this.idString(this.produtos[i].id);
                }
            }
        }

        if(lista != ''){
            return 'Lista de produtos vencidos:\n' + lista;
        }

        return lista
    }

    idString(id: string): string{
        let texto = id + '; ';

        return texto;
    }


}

let produto: Produto = new Produto('1', 'd1', 8, 10);
let perecivel: ProdutoPerecivel = new ProdutoPerecivel('2', 'd2', 4, 5, 2020, 5, 20);
let per2: ProdutoPerecivel = new ProdutoPerecivel('3','d3',3,3,2022,3,12);

let estoque: Estoque = new Estoque();

estoque.inserir(produto);
estoque.inserir(perecivel);
estoque.inserir(per2);

console.log(estoque.listarVencidos());
