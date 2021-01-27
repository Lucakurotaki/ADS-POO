package javaExercicios.Exercicios_05;

public class TestaContaImposto {
	public static void main(String args[]) {
		ContaImposto conta = new ContaImposto("1",1000);
		
		System.out.println(conta.getSaldo());
		conta.credito(500);
		System.out.println(conta.getSaldo());
		conta.debito(100);
		System.out.println(conta.getSaldo());
	}
}
