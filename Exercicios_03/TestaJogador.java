package javaExercicios.Exercicios_03;

public class TestaJogador {
	public static void main(String args[]) {
		Jogador j1 = new Jogador(70,80,10000);
		Jogador j2 = new Jogador(65,90,8500);
		
		j1.atacar(j2);
		j2.atacar(j1);
		
		System.out.println(j1.pontos);
		System.out.println(j2.pontos);
	}
}
