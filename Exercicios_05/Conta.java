package javaExercicios.Exercicios_05;

public class Conta {
	private String numero;
	private double saldo;
	
	Conta(){
		
	}
	
	public Conta(String num){
		numero = num;
	}
	
	public Conta(String num, double saldoInicial){
		numero = num;
		saldo = saldoInicial;
	}
	
	public void sacar(double valor) {
		saldo = saldo-valor;
	}
	
	public void depositar(double valor) {
		saldo = saldo +valor;
	}
	
	public void setNumero(String numero) {
		this.numero = numero;
	}
	
	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	
	public String consultarNumero() {
		return numero;
	}
	
	public double consultarSaldo() {
		return saldo;
	}
	
	public void transferir(Conta destino, double valor) {
		this.sacar(valor);
		destino.depositar(valor);
	}
}
