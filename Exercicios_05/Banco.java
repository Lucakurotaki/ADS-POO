package javaExercicios.Exercicios_05;

public class Banco {
	Conta[] contas;
	private int indice;
	
	public Banco(){
		contas = new Conta[100];
	}
	
	public Banco(int maximo){
		contas = new  Conta[maximo];
	}
	
	
	public void inserir(Conta c) {
		if(indice == contas.length) {
			System.out.println("Quantidade máxima atingida. Não é possível inserir.");
		}
		else {
			contas[indice] = c;
			indice++;
			System.out.println("Conta cadastrada com sucesso.");
		}
		
	}
	
	public void alterar(Conta c) {
		int indice = consultarIndice(c.consultarNumero());
		if(indice != -1) {
			contas[indice] = c;
			System.out.println("Conta alterada com sucesso.");
		}
	}
	
	public Conta consultar(String numero) {
		Conta c = null;
		for(int i=0; i < indice; i++) {
			if(contas[i].consultarNumero().equals(numero)) {
				c = contas[i];
				break;
			}
		}
		if(c != null) {
			System.out.println("Conta: " + c.consultarNumero() + "\nSaldo: R$" + c.consultarSaldo());
		}
		else {
			System.out.println("Conta inexistente.");
		}
		return c;
	}
	
	private int consultarIndice(String numero) {
		int pos = -1;
		for(int i =0; i < indice; i++) {
			if(contas[i].consultarNumero().equals(numero)) {
				pos = i;
				break;
			}
		}
		
		return pos;
	}
	
	public void excluir(String numero) {
		int posicao = consultarIndice(numero);
		if(posicao!=-1){
			for(int i = posicao; i < indice-1; i++) {
				contas[i] = contas[i+1];
			}
			
			indice--;
			
			System.out.println("Conta excluída com sucesso.");
		}
		
	}

	public void debitar(String numero, double valor) {
		Conta c = consultar(numero);
		if(c != null) {
			c.sacar(valor);
			System.out.println("Saque de R$" + valor + " concluído com sucesso.");
			consultar(numero);
		}
		else {
			System.out.println("Conta inexistente.");
		}
	}
	
	public void creditar(String numero, double valor) {
		Conta c = consultar(numero);
		if(c != null) {
			c.depositar(valor);
			System.out.println("Depósito de R$" + valor + " concluído com sucesso.");
			consultar(numero);
		}
		else {
			System.out.println("Conta inexistente.");
		}
	}
	
	public void transferir(String numCredito, String numDebito, double valor) {
		Conta origem = consultar(numDebito);
		Conta destino = consultar(numCredito);
		
		if(origem == null || destino == null) {
			System.out.println("Conta inexistente.");
		}
		else {
			origem.transferir(destino, valor);
			System.out.println("Transferência concluída com sucesso.");
			consultar(numDebito);
			consultar(numCredito);
		}
	}
	
	public int contasCadastradas() {
		return indice;
	}
	
	public double depositoTotal() {
		int total = 0;
		for(int i=0; i<indice;i++) {
			total += contas[i].consultarSaldo();
		}
		
		return total;
	}
	
	public double mediaSaldo() {
		return depositoTotal()/contasCadastradas();
	}
}