/*
1. 
    a. (F)
    b. (F)
    c. (V)
    d. (F)
    e. (F)
    f. (V)
    g. (V)
    h. (V)
*/

//2.

class Triangulo{
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(l1: number, l2: number, l3: number){
        this.lado1 = l1;
        this.lado2 = l2;
        this.lado3 = l3;
    }

    modulo(n1: number, n2: number){
        let dif = n1-n2;

        if(dif<0){
            return dif*-1;
        }

        return dif;
    }

    ehTriangulo(): boolean{
        const difModulo = this.modulo(this.lado2, this.lado3);

        if((difModulo < this.lado1)&&(this.lado1 < this.lado2+this.lado3)){
            return true;
        }

        return false;
    }

    ehIsoceles(): boolean{
        if(!this.ehTriangulo()){
            return false;
        }

        if((this.lado1==this.lado2)&&(this.lado2==this.lado3)){
            return true;
        }

        return false;
    }

    ehEquilatero(): boolean{
        if(!this.ehTriangulo()){
            return false;
        }

        if((this.lado1==this.lado2)||(this.lado2==this.lado3)||(this.lado1==this.lado3)){
            return true;
        }

        return false;
    }

    ehEscaleno(): boolean{
        if(!this.ehTriangulo()){
            return false;
        }

        if((this.lado1!=this.lado2)&&(this.lado2!=this.lado3)){
            return true;
        }

        return false;
    }
}

let t1: Triangulo = new Triangulo(100, 100, 100);

console.log(t1.ehTriangulo());
console.log(t1.ehEquilatero());
console.log(t1.ehIsoceles());
console.log(t1.ehEscaleno());

//3.

class Conta {
	numero: String;
	saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

class Banco {
	contas: Conta[] = [];
	
	inserir(conta: Conta): void {        
        if(this.consultar(conta.numero)==null){
            this.contas.push(conta);
        }
	}

	consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero: String, valor: number): void{
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null){
            contaConsultada.sacar(valor);
        }
    }

    transferir(numeroCredito: String, numeroDebito: String, valor: number): void{
        let cCreConsultada = this.consultar(numeroCredito);
        let cDebConsultada = this.consultar(numeroDebito);

        if((cCreConsultada!=null)&&(cDebConsultada!=null)){
            cCreConsultada.transferir(cDebConsultada, valor);
        }
    }

    quantidadeDeContas(): number{
        return this.contas.length;
    }

    depositoTotal(): number{
        let total = 0;
        
        this.contas.forEach((conta)=>total += conta.saldo);

        return total;
    }

    mediaSaldo(): number{
        let media = this.depositoTotal()/this.quantidadeDeContas();

        return media;
    }
}

//4.

class Postagem{
    id: number;
    texto: string;
    curtidas: number;

    curtir():void{
        this.curtidas++;
    }

    toString():string{
        return "Texto:\n" + this.texto + `\nCurtidas: ${this.curtidas}`;
    }
}

class Microblog{
    posts: Postagem[] = [];

    incluir(post: Postagem): void{
        this.posts.push(post);
    }

    consultarPorIndice(id: number): number{
        let indice: number = -1;
        for(let i: number = 0; i < this.posts.length; i++){
            if(this.posts[i].id == id){
                indice = i;
                break;
            }
        }

        return indice;
    }

    excluir(id: number): void{
        let indice = this.consultarPorIndice(id);

        if(indice != -1){
            for(let i: number = indice; i < this.posts.length; i++){
                this.posts[i] = this.posts[i+1];
            }

            this.posts.pop();
        }
    }

    maisCurtida(): Postagem[]{
        let maisCurtida: Postagem[] = [];

        maisCurtida[0] = this.posts[0];

        for(let i: number = 0; i < this.posts.length; i++){
            if(this.posts[i] > maisCurtida[0]){
                maisCurtida[0] = this.posts[i];
            }
        }

        return maisCurtida;
    }

    curtir(id: number): void{
        let indice = this.consultarPorIndice(id);

        if(indice != -1){
            this.posts[indice].curtir();
        }
    }

    toString(): string{
        let texto: string = "";

        this.posts.forEach((post)=>{texto += ("\n\n" + post)});

        return texto
    }
}
