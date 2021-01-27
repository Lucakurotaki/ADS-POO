package javaExercicios.Exercicios_04;

public class TestaSenha {
	public static void main(String[] args) {
		Senha senha = new Senha("abc");

		senha.iguais("abc");
		senha.iguais("  abc  ");
		senha.iguaisTrim("  abc  ");
		
		if(senha.tamanhoSeguro()) {
			System.out.println("Tamanho seguro.");
		}
		
		Senha senha2 = new Senha("Abc123");
		
		if(senha2.possuiMaiusculaMinuscula()) {
			System.out.println("Possui maisucula e minuscula.");
		}
		
		if(senha2.possuiNumero()) {
			System.out.println("Possui número.");
		}
		
		if(senha2.ehValida()) {
			System.out.println("É válida.");
		}
	}
}
