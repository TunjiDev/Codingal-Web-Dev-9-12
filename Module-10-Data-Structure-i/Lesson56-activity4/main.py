# setx = {"green", "blue"}
# sety = {"blue", "yellow"}
# print("Original set elements: ")
# print(setx)
# print(sety)
# print("\nIntersection of two said sets: ")
# setz = setx.intersection(sety)
# print(setz)

def prints(n):
    if(n<=0):
        return
    print("Codingal")
    prints(n/2)
    prints(n/2)
prints(2) 

# def prints(n):
#    if n <= 0:
#       return
#    print("Codingal")
#    prints(n // 2)  # Use integer division
#    prints(n // 2)

# prints(2)
