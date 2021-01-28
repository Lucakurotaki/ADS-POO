package javaExercicios.Exercicios_06_1;

public class Carro extends Veiculo {
	String modelo;
	
	public Carro(String placa, int ano, String modelo) {
		super(placa,ano);
		this.modelo = modelo;
	}
}
