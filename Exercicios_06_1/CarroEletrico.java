package javaExercicios.Exercicios_06_1;

public class CarroEletrico extends Carro {
	int autonomiaBateria;
	
	public CarroEletrico(String placa, int ano, String modelo, int auto) {
		super(placa,ano,modelo);
		this.autonomiaBateria = auto;
	}
}
