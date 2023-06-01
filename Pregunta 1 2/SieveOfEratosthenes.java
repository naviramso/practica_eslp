import java.util.*;

public class SieveOfEratosthenes {
    public static List<Integer> sieveOfEratosthenes(int n) {
        // Crear un array de booleanos para marcar los números primos
        // Inicialmente, se asume que todos los números son primos
        boolean[] primes = new boolean[n + 1];
        Arrays.fill(primes, true);

        // 0 y 1 no son primos, por lo que se marcan como falsos
        primes[0] = false;
        primes[1] = false;

        // Iterar sobre los números desde 2 hasta la raíz cuadrada de n
        for (int i = 2; i * i <= n; i++) {
            // Si el número actual es primo
            if (primes[i]) {
                // Marcar todos los múltiplos del número actual como no primos
                for (int j = i * i; j <= n; j += i) {
                    primes[j] = false;
                }
            }
        }

        // Crear una lista con los números primos encontrados
        List<Integer> primeNumbers = new ArrayList<>();
        for (int i = 2; i <= n; i++) {
            if (primes[i]) {
                primeNumbers.add(i);
            }
        }

        return primeNumbers;
    }

    public static void main(String[] args) {
        int n = 100000000;
        List<Integer> primes = sieveOfEratosthenes(n);
        System.out.println(primes);
    }
}