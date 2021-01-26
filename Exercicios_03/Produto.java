package javaExercicios.Exercicios_03;

public class Produto {
	String codigo;
	String descricao;
	double valor;
	int quantidade;
	int quantidadeMinima;
	
	Produto(String codigo, String descricao, double valor, int quantidade,int quantidadeMinima){
		this.codigo = codigo;
		this.descricao = descricao;
		this.valor = valor;
		this.quantidade = quantidade;
		this.quantidadeMinima = quantidadeMinima;
	}
	
	void baixar(int reduc) {
		if(this.quantidade-reduc >= this.quantidadeMinima) {
			this.quantidade -= reduc;
		}
		
	}
	
	void repor(int repos) {
		this.quantidade -= repos;
	}
	
	void reajusta(double taxa) {
		this.valor += (this.valor*taxa/100);
	}
	
	public String toString() {
		return "Código:" + this.codigo + "\nDescrição: " + this.descricao + "\nValor: " + this.valor + 
				"\nQuantidade: " + this.quantidade;
	}
	
	boolean equals(Produto produto) {
		if(produto.codigo == this.codigo) {
			return true;
		}
		else {
			return false;
		}
	}
}
