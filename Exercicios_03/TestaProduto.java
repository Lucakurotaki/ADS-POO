package javaExercicios.Exercicios_03;

public class TestaProduto {
	public static void main(String args[]) {
		Produto pro1 = new Produto("101","Livro",50,100,40);
		Produto pro2 = new Produto("101", "Celular",1000,50,30);
		Produto pro3 = new Produto("202","Violão",200,16,5);
		
		System.out.println(pro1.toString());
		System.out.println(pro2.toString());
		System.out.println(pro3.toString());
		System.out.println("");
		
		pro1.baixar(61);
		pro2.repor(10);
		pro2.baixar(25);
		pro3.reajusta(10);
		
		System.out.println(pro1.toString());
		System.out.println(pro2.toString());
		System.out.println(pro3.toString());
		System.out.println("");
		
		if(pro1.equals(pro2)) {
			System.out.println("Iguais");
		}
		else {
			System.out.println("Diferentes");
		}
		
		if(pro2.equals(pro3)) {
			System.out.println("Iguais");
		}
		else {
			System.out.println("Diferentes");
		}
	}
	
	
}
