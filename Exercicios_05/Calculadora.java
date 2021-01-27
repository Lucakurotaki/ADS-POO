package javaExercicios.Exercicios_05;

public class Calculadora {
	private double operando1;
	private double operando2;
	
	public Calculadora(double op1, double op2) {
		this.operando1 = op1;
		this.operando2 = op2;
	}
	
	public double adicao() {
		double soma = operando1 + operando2;
		return soma;
	}
	
	public double subtracao() {
		double diferenca = operando1 - operando2;
		return diferenca;
	}
}
