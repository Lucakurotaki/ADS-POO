package javaExercicios.Exercicios_04;

public class TestaMicroblog {
	public static void main(String args[]) {
		Microblog microblogs = new Microblog(3);
		Postagem post1 = new Postagem(1,"Conteúdo do post 1");
		Postagem post2 = new Postagem(2,"Conteúdo do post 2");
		Postagem post3 = new Postagem(3,"Conteúdo do post 3");
		Postagem post4 = new Postagem(4,"Conteúdo do post 4");
		
		microblogs.incluir(post1);
		microblogs.incluir(post2);
		microblogs.incluir(post3);
		microblogs.incluir(post4);
		
		System.out.println("Print 1");
		for(int i=0;i<microblogs.indice;i++) {
			System.out.println(microblogs.postagens[i].toString());
		}
		System.out.println("");
		
		microblogs.curtir(1);
		microblogs.curtir(3);
		microblogs.curtir(3);
		
		microblogs.excluir(2);
		microblogs.incluir(post4);
		
		System.out.println("Print 2");
		for(int i=0;i<microblogs.indice;i++) {
			System.out.println(microblogs.postagens[i].toString());
		}
		System.out.println("");
		
		System.out.println("Mais curtida" + microblogs.maisCurtida().toString());
	}
}
