package javaExercicios.Exercicios_03;

public class TestarConta {
	public static void main(String args[]) {
		Conta c1 = new Conta("1",500);
		Conta c2 = new Conta("2",600);
		
		System.out.println(c1.consultarSaldo());
		System.out.println(c2.consultarSaldo());
		System.out.println("");
		
		c1.sacar(501);
		c2.sacar(100);
		System.out.println(c1.consultarSaldo());
		System.out.println(c2.consultarSaldo());
		System.out.println("");
		
		c1.transferir(c2, 501);
		System.out.println(c1.consultarSaldo());
		System.out.println(c2.consultarSaldo());
		System.out.println("");
		
		c2.transferir(c1, 100);
		System.out.println(c1.consultarSaldo());
		System.out.println(c2.consultarSaldo());
	}
}
