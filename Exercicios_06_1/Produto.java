package javaExercicios.Exercicios_06_1;

public class Produto {
	int id;
	String descricao;
	int quantidade;
	double valor;
	
	public Produto(int id,String desc,int quant,double valor) {
		this.id = id;
		this.descricao = desc;
		this.quantidade = quant;
		this.valor = valor;
	}
	
	public void repor(int quant) {
		this.quantidade += quant;
	}
	
	public void darBaixa(int quant) {
		this.quantidade -= quant;
	}
}
