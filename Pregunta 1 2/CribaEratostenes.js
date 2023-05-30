function sieveOfEratosthenesRecursive(n, current = 2, primes = []) {
    if (current > n) {
      return primes;
    }
  
    if (primes.every(prime => current % prime !== 0)) {
      primes.push(current);
    }
  
    return sieveOfEratosthenesRecursive(n, current + 1, primes);
  }
  
  // Ejemplo de uso:
  let n = 100;
  let primes = sieveOfEratosthenesRecursive(n);
  console.log(primes); 