package javaExercicios.Exercicios_04;

public class Microblog {
	Postagem[] postagens;
	int indice;
	
	Microblog(int maximo){
		postagens = new Postagem[maximo];
	}
	
	void incluir(Postagem post) {
		if(indice == postagens.length) {
			System.out.println("Número máximo de postagens excedida. Não é possível postar.");
		}
		else {
			postagens[indice] = post;
			indice++;
		}
	}
	
	int consultarIndice(int id) {
		int pos = -1;
		for(int i = 0;i < indice;i++) {
			if(id == postagens[i].id) {
				pos = i;
				break;
			}
		}
		
		return pos;
	}
	
	void excluir(int id) {
		int posicao = consultarIndice(id);
		if(posicao != -1) {
			for(int i = posicao; i<indice-1;i++) {
				postagens[i] = postagens[i+1];
			}
			indice--;
		}
		else {
			System.out.println("Postagem inexistente.");
		}
	}
	
	Postagem maisCurtida() {
		int curtidas = 0;
		int pos = 0;
		for(int i=0;i<indice;i++) {
			if(postagens[i].qtdCurtidas > curtidas) {
				curtidas = postagens[i].qtdCurtidas;
				pos = i;
			}
		}
		
		return postagens[pos];
	}
	
	void curtir(int id) {
		int posicao = consultarIndice(id);
		if(posicao != -1) {
			postagens[posicao].curtir();
		}
	}
}
