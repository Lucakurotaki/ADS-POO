package javaExercicios.Exercicios_04;

public class TestaPostagem {
	public static void main(String args[]) {
		Postagem post1 = new Postagem(1,"Conteúdo do post 1");
		
		for(int i=1;i<=10;i++) {
			post1.curtir();
		}
		
		System.out.println(post1.toString());
	}
}
