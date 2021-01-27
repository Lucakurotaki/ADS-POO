package javaExercicios.Exercicios_05;

public class TestaHora {
	public static void main(String args[]) {
		Hora horario = new Hora("1","15","30");
		
		System.out.println(horario.getHora());
		System.out.println(horario.getMinutos());
		System.out.println(horario.getSegundos());
		
		horario.horario();
	}
}
