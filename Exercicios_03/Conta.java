package javaExercicios.Exercicios_03;

public class Conta {
	String numero;
	double saldo;
	
	Conta(){
		
	}
	
	Conta(String num){
		numero = num;
	}
	
	Conta(String num, double saldoInicial){
		numero = num;
		saldo = saldoInicial;
	}
	
	boolean sacar(double valor) {
		if (saldo-valor >= 0) {
			saldo = saldo-valor;
			return true;
		}
		else {
			return false;
		}
	}
	
	void depositar(double valor) {
		saldo = saldo+valor;
	}
	
	double consultarSaldo() {
		return saldo;
	}
	
	boolean transferir(Conta destino, double valor) {
		if(this.sacar(valor)) {
			destino.depositar(valor);
			return true;
		}
		else {
			return false;
		}
		
	}
}
