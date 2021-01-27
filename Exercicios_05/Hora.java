package javaExercicios.Exercicios_05;

public class Hora {
	private String hora;
	private String minutos;
	private String segundos;
	
	public Hora(String hora, String minutos, String segundos) {
		this.hora = hora;
		this.minutos = minutos;
		this.segundos = segundos;
	}
	
	public String getHora() {
		return this.hora;
	}
	
	public String getMinutos() {
		return this.minutos;
	}
	
	public String getSegundos() {
		return this.segundos;
	}
	
	public void horario() {
		String h = this.hora;
		String m = this.minutos;
		String s = this.segundos;
		
		if(h.length() ==  1) {
			h = "0" + h;
		}
		if(m.length() == 1) {
			m = "0" + m;
		}
		if(s.length() == 1) {
			s = "0" + s;
		}
		System.out.println(h + ":" + m + ":" + s);
	}
	
}
