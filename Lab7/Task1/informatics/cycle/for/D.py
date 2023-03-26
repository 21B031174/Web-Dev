a = int(input())
b = int(input())
c=0
while a>0:
    d=a%10
    if d==b:c=c+1
    a=int(a/10)
print(c)