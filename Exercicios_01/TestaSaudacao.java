
public class TestaSaudacao {
	public static void main(String[] args) {
		Saudacao s = new Saudacao();
		s.texto = "Hello";
		s.destinatario = "Luca";
		
		System.out.println(s.obterSaudacao());
	}

}
