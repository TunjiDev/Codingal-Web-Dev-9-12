
# def roman_to_int(a):
#   roman={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
#   int_form=0
#   for i in range(len(a)):
#     if i+1<len(a) and roman[a[i]]<roman[a[i+1]]:
#       int_form-=roman[a[i]]
#     else:
#       int_form+=roman[a[i]]
#   return int_form

# a=input("enter a roman numeral: ")
# print("interger form of ",a," is",roman_to_int(a))

def roman_to_int(a):
    # Dictionary to store Roman numeral values
    roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    int_form = 0
    
    # Convert the input to uppercase to handle both uppercase and lowercase input
    a = a.upper()
    
    # Loop to convert each character
    for i in range(len(a)):
        # Check if the next Roman numeral is larger, meaning subtraction case
        if i + 1 < len(a) and roman[a[i]] < roman[a[i + 1]]:
            int_form -= roman[a[i]]
        else:
            int_form += roman[a[i]]
    
    return int_form

# Input from user
a = input("Enter a Roman numeral: ")
print("Integer form of", a, "is", roman_to_int(a))