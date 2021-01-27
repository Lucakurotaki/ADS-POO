package javaExercicios.Exercicios_04;

public class TestaBanco {
	public static void main(String args[]) {
		Banco banco = new Banco(3);
		
		Conta conta1 = new Conta("1",1000);
		Conta conta2 = new Conta("2",2000);
		Conta conta3 = new Conta("3",3000);
		Conta conta4 = new Conta("4",4000);
		
		banco.inserir(conta1);
		banco.inserir(conta2);
		banco.inserir(conta3);
		banco.inserir(conta4);
		
		System.out.println(banco.consultar("1").saldo);
		banco.creditar("1", 20);
		System.out.println(banco.consultar("1").saldo);
		System.out.println("");
		
		System.out.println(banco.consultar("2").saldo);
		System.out.println(banco.consultar("3").saldo);
		System.out.println("");
		banco.transferir("3", "2", 50);
		System.out.println(banco.consultar("2").saldo);
		System.out.println(banco.consultar("3").saldo);
		System.out.println("");
		
		System.out.println(banco.contasCadastradas());
		System.out.println(banco.depositoTotal());
		System.out.println(banco.mediaSaldo());
	}
}
