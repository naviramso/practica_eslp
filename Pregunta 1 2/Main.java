public class Main {
    public static double divideSafe(double dividend, Double divisorFunc) {
        double divisorValue = divisorFunc;
        if (divisorValue != 0 || dividend / divisorValue > 0) {
            return dividend / divisorValue;
        } else {
            return 0;
        }
    }

    public static void main(String[] args) {
        double result = divideSafe(10, 0.0);
        System.out.println("The result of the division is: " + result);
    }
}