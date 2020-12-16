
public class Equipamento {
	boolean swt = true;
	
	boolean liga() {
		if (swt != true) {
			return swt = true;
		}
		return swt;
	}
	boolean desliga() {
		if (swt != false) {
			return swt = false;
		}
		return swt;
	}
	boolean inverte() {
		return swt = !swt;
	}
	boolean estaLigado() {
		return swt;
	}

}
