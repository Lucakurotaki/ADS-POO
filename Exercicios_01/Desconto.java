
public class Desconto {
	double valor;
	double desc;
	
	double calcula() {
		return valor*(1-desc/100);
	}

}
