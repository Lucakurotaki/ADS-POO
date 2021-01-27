package javaExercicios.Exercicios_04;

public class Senha {
	String valor;
	
	Senha(String valor){
		this.valor = valor;
	}
	
	void iguais(String valor) {
		String senha = this.valor;
		if(senha.equals(valor)) {
			System.out.println("Senha correta.");
		}
		else {
			System.out.println("Senha incorreta.");
		}
	}
	
	void iguaisTrim(String valor) {
		String senha = this.valor.trim();
		if(senha.equals(valor.trim())) {
			System.out.println("Senha correta (trim).");
		}
		else {
			System.out.println("Senha incorreta (trim).");
		}
	}
	
	boolean tamanhoSeguro() {
		if(this.valor.length() >= 6) {
			return true;
		}
		else {
			return false;
		}
	}
	
	boolean possuiMaiusculaMinuscula() {
		boolean maiuscula = false;
		boolean minuscula = false;
		
		for(int i = 0; i < valor.length();i++) {
			if(valor.charAt(i)>= 'a' && valor.charAt(i) <= 'z'){
				maiuscula = true;
			}
			else if(valor.charAt(i) >= 'A' && valor.charAt(i) <= 'Z') {
				minuscula = true;
			}
		}
		
		if (minuscula == true && maiuscula == true) {
			return true;
		}
		else {
			return false;
		}
	}
	
	boolean possuiNumero() {
		for(int i = 0; i < valor.length();i++) {
			if(valor.charAt(i) >= '0' && valor.charAt(i) <= '9') {
				return true;
			}
		}
		return false;
	}
	
	boolean ehValida() {
		if(this.tamanhoSeguro() == true && this.possuiMaiusculaMinuscula() && this.possuiNumero()) {
			return true;
		}
		return false;
	}
}
