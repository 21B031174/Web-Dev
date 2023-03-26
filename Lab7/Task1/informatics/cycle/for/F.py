a = int(input())
b=0
while(a>0):
    c=a%10
    a//=10
    b*=10
    b+=c

print(b)