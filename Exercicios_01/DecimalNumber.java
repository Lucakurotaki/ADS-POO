
public class DecimalNumber {
	double value;
	
	int getIntValue() {
		return (int)value;
	}
	
	double getDecimalValue() {
		return value - getIntValue();
	}
}
