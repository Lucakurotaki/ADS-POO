package javaExercicios.Exercicios_06_1;
import java.time.LocalDate;

public class ProdutoPerecivel extends Produto{
	LocalDate validade;
	
	public ProdutoPerecivel(int id, String desc, int quant, double valor, LocalDate validade) {
		super(id,desc,quant,valor);
		this.validade = validade;
	}
	
	public boolean valido() {
		if(LocalDate.now().isBefore(validade)) {
			return true;
		}
		else {
			return false;
		}
	}
}
