# To find factors of a user input
#Goes from 1 to number and checks if the number is divisible by i. If yes then it is a factor.
def print_factors(n):
    print("The factors of", n, "are:")
    for i in range(1, n + 1):
        if n % i == 0:
            print(i, end=' ')

# Taking user input
number = int(input("Enter a number to find its factors: "))
# Calling the function to print factors
print_factors(number)