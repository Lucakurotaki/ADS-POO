package javaExercicios.Exercicios_03;

public class Hotel {
	int quantReservas;
	void adicionarReserva() {
		quantReservas++;
	}
	

	public static void main(String args[]) {
		Hotel hotel = new Hotel();
		System.out.println(hotel.quantReservas);
	}
}
