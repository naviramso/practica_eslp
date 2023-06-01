function sieveOfEratosthenes(n) {

  let primes = new Array(n + 1).fill(true);

 
  primes[0] = false;
  primes[1] = false;

 
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  // Crear un array con los números primos encontrados
  let primeNumbers = [];
  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

// Ejemplo de uso:

let primes = sieveOfEratosthenes(1000000000);

console.log(primes[5761454]);
