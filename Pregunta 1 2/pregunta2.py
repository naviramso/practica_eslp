def is_prime(n):
    # Verificar si un número es primo
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def primes():
    # Generar una secuencia infinita de números primos
    n = 2
    while True:
        if is_prime(n):
            yield n
        n += 1

# Ejemplo de uso:
prime_generator = primes()
for _ in range(100):
    print(next(prime_generator))