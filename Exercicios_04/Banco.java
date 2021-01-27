package javaExercicios.Exercicios_04;

public class Banco {
	Conta[] contas;
	int indice;
	
	Banco(){
		contas = new Conta[10];
	}
	
	Banco(int maximo){
		contas = new  Conta[maximo];
	}
	
	
	void inserir(Conta c) {
		if(indice == contas.length) {
			System.out.println("Quantidade máxima atingida. Não é possível inserir.");
		}
		else {
			contas[indice] = c;
			indice++;
		}
		
	}
	
	void alterar(Conta c) {
		int indice = consultarIndice(c.numero);
		if(indice != -1) {
			contas[indice] = c;
		}
	}
	
	Conta consultar(String numero) {
		Conta c = null;
		for(int i=0; i < indice; i++) {
			if(contas[i].numero.equals(numero)) {
				c = contas[i];
				break;
			}
		}
		
		return c;
	}
	
	int consultarIndice(String numero) {
		int pos = -1;
		for(int i =0; i < indice; i++) {
			if(contas[i].numero.equals(numero)) {
				pos = i;
				break;
			}
		}
		
		return pos;
	}
	
	void excluir(String numero) {
		int posicao = consultarIndice(numero);
		if(posicao!=-1){
			for(int i = posicao; i < indice-1; i++) {
				contas[i] = contas[i+1];
			}
			
			indice--;
		}
	}

	void debitar(String numero, double valor) {
		Conta c = consultar(numero);
		if(c != null) {
			c.sacar(valor);
		}
		else {
			System.out.println("Conta inexistente.");
		}
	}
	
	void creditar(String numero, double valor) {
		Conta c = consultar(numero);
		if(c != null) {
			c.depositar(valor);
		}
		else {
			System.out.println("Conta inexistente.");
		}
	}
	
	void transferir(String numCredito, String numDebito, double valor) {
		Conta origem = consultar(numDebito);
		Conta destino = consultar(numCredito);
		
		if(origem == null || destino == null) {
			System.out.println("Conta inexistente.");
		}
		else {
			origem.transferir(destino, valor);
		}
	}
	
	int contasCadastradas() {
		return indice;
	}
	
	double depositoTotal() {
		int total = 0;
		for(int i=0; i<indice;i++) {
			total += contas[i].saldo;
		}
		
		return total;
	}
	
	double mediaSaldo() {
		return depositoTotal()/contasCadastradas();
	}
}