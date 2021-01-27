package javaExercicios.Exercicios_05;

import java.util.Scanner;

public class ExecutaBanco {
	public static void main(String args[]) {
		Banco b = new Banco();
		Scanner sc = new Scanner(System.in);
		String opcao = "";
		do {
			System.out.println("\n1-Cadastrar\n2-Alterar\n3-Excluir\n4-Consultar\n5-Creditar\n6-Debitar\n7-Transferir\n8-Media\n9-Sair");
			opcao = sc.next();
			
			Conta c = new Conta();
			String num = "";
			double valor = 0;
			
			switch(opcao){
				case "1" :
					System.out.println("Digite o número: ");
					c.setNumero(sc.next());
					
					System.out.println("Digite o valor: ");
					c.setSaldo(sc.nextDouble());
					b.inserir(c);
					break;
				
				case "2" :
					System.out.println("Digite o número: ");
					c.setNumero(sc.next());
					
					System.out.println("Digite o valor: ");
					c.setSaldo(sc.nextDouble());
					b.alterar(c);
					break;
				
				case "3" :
					System.out.println("Digite o número: ");
					b.excluir(sc.next());
					break;
				
				case "4" :
					System.out.println("Digite o número: ");
					b.consultar(sc.next());
					break;
					
				case "5" :
					System.out.println("Digite o número: ");
					num = sc.next();
					
					System.out.println("Digite o valor: ");
					valor = sc.nextDouble();
					
					b.creditar(num, valor);
					break;
				
				case "6" :
					System.out.println("Digite o número: ");
					num = sc.next();
					
					System.out.println("Digite o valor: ");
					valor = sc.nextDouble();
					
					b.debitar(num, valor);
					break;
					
				case "7" :
					System.out.println("Digite o número do destino: ");
					num = sc.next();
					System.out.println("Digite o número da origem: ");
					String num2 = sc.next();
					
					System.out.println("Digite o valor: ");
					valor = sc.nextDouble();
					
					b.transferir(num, num2, valor);
					break;
				
				case "8" :
					System.out.println("A média total é: R$" + b.mediaSaldo());
					break;
			}
		}while(!opcao.equals("9"));
		
		sc.close();
	}
}
