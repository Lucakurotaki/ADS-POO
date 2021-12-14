//1.
class Calculadora{
    private operando1: number;
    private operando2: number;

    constructor(op1: number, op2: number){
        this.operando1 = op1;
        this.operando2 = op2;
    }

    somar(): number{
        return this.operando1+this.operando2;
    }

    multiplicar(): number{
        return this.operando1*this.operando2;
    }
}

let calculo: Calculadora = new Calculadora(10,35);

console.log(calculo.somar());
console.log(calculo.multiplicar());
//console.log(calculo.operando1);

//não é possível visualizar o valor do atributo "operando1" acessando diretamente.

//2.
class Hora{
    constructor(private _hora: number, private _minutos: number, private _segundos){};

    lerHora(): number{
        return this._hora;
    }

    lerMinutos(): number{
        return this._minutos;
    }

    lerSegundos(): number{
        return this._segundos;
    }

    private digitos(number):string{
        if(number < 10){
            return `0${number}`;
        }
        return `${number}`;
    }

    hhmmss(): string{
        return this.digitos(this._hora) + ":" + this.digitos(this._minutos) + ":" + this.digitos(this._segundos);
    }
}

let tempo: Hora = new Hora(10, 9, 31);

console.log(tempo.lerHora());
console.log(tempo.lerMinutos());
console.log(tempo.lerSegundos());
console.log(tempo.hhmmss());

//3.
class Banco {
	private contas: Conta[] = [];
	
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

	private consultarPorIndice(numero: String): number {
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

class Conta {
	private _numero: String;
	private _saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}

    get numero(): String{
        return this._numero;
    }

    get saldo(): number{
        return this._saldo;
    }

	sacar(valor: number): void {
		this._saldo = this._saldo - valor;
	}

	depositar(valor: number): void {
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}