package javaExercicios.Exercicios_06_1;
import java.util.ArrayList;

public class Estoque {
	ArrayList<Produto> produtos;
	
	public Estoque() {
		produtos = new ArrayList<Produto>();
	}
	
	void inserir(Produto produto) {
		produtos.add(produto);
	}
	
	Produto consultar(Produto produto) {
		Produto resultado = null;
		if(produtos.contains(produto)) {
			resultado = produtos.get(produtos.indexOf(produto));
		}
		
		return resultado;
	}
	
	private Produto consultar(int id) {
		return consultar(new Produto(id,"",0,0));
	}
	
	Produto consultarPorNome(Produto produto) {
		Produto resultado = null;
		for (Produto p: produtos) {
			if (p.descricao.equals(produto.descricao)) {
				resultado = p;
				break;
			}
		}
		
		return resultado;
	}
	
	void excluir(Produto p) {
		produtos.remove(p);
	}
	
	void darBaixa(int id, int quantidade) {
		Produto p = consultar(id);
		if (p != null) {
			p.darBaixa(quantidade);
		}
	}
	
	void repor(int id, int quantidade) {
		Produto p = consultar(id);
		if (p != null) {
			p.repor(quantidade);
		}
	}
}
