
public class NumberUtils {
	int n;
	
	boolean isPair() {
		return n % 2 == 0;
	}
	boolean isOdd() {
		return ! isPair();
	}
	boolean isPrime() {
		for (int i = 2; i < n; i++) {
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	}
	String printCount() {
		int i = 0;
		String s = "";
		while (i <= n) {
			s = s + i + " ";
			i++;
		}
		return s;
	}
	String printReverseCount() {
		int i = n;
		String s = "";
		while (i >= 0) {
			s = s + i + " ";
			i--;
		}
		return s;
	}
}
