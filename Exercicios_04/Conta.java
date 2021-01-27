package javaExercicios.Exercicios_04;

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
	
	void sacar(double valor) {
		saldo = saldo-valor;
	}
	
	void depositar(double valor) {
		saldo = saldo +valor;
	}
	
	double consultarSaldo() {
		return saldo;
	}
	
	void transferir(Conta destino, double valor) {
		this.sacar(valor);
		destino.depositar(valor);
	}
}
