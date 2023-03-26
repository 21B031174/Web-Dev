a = int(input())
c=0
while(a>0):
    b=a%10
    c+=b
    a=int(a/10)
print(c)