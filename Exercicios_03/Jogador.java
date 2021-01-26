package javaExercicios.Exercicios_03;

public class Jogador {
	int forca;
	int nivel;
	int pontos;
	
	Jogador(int forca, int nivel, int pontos){
		this.forca = forca;
		this.nivel = nivel;
		this.pontos = pontos;
	}
	
	int calcularAtaque() {
		int ataque;
		ataque = this.forca*this.nivel;
		
		return ataque;
	}
	
	void atacar(Jogador oponente) {
		int danos = calcularAtaque();
		oponente.pontos = oponente.pontos-danos;
	}
}
