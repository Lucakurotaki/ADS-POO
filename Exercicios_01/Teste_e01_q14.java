
public class Teste_e01_q14 {
	
	public static void main(String[] args) {
		Equipamento equipamento = new Equipamento();
		
		System.out.println(equipamento.estaLigado());
		equipamento.liga();
		System.out.println(equipamento.estaLigado());
		equipamento.desliga();
		System.out.println(equipamento.estaLigado());
		equipamento.inverte();
		System.out.println(equipamento.estaLigado());
	}

}
