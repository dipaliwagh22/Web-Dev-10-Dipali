import math
a, b = int(input()), int(input())
print(abs(a * b) // math.gcd(a, b))
