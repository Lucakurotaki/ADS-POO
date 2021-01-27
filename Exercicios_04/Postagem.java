package javaExercicios.Exercicios_04;

public class Postagem {
	int id;
	String texto;
	int qtdCurtidas;
	
	Postagem(int id, String texto){
		this.id = id;
		this.texto = texto;
	}
	
	void curtir() {
		qtdCurtidas++;
	}
	
	public String toString() {
		return ("\nPostagem:\n" + texto + "\n\nCurtidas: " + qtdCurtidas);
	}
}
