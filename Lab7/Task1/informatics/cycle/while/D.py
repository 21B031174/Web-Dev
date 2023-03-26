a = int(input())
i=1
t= True
while i<=a:
    if i==a:
        print("YES")
        t=False
    i*=2
if(t):
    print("NO")