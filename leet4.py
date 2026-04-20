arr = ['d','e','b','o','t','t','a','m','k','a','r']
k = 2
def distinct(arr,k):        
    print(arr)  
    l3 = []
    count = 0
    for i in arr:
        count = arr.count(i)
        if(count == 1):
            l3.append(i)
    print(l3)
    if len(l3) >= k:
        print(l3[k-1])
    else:
        print("")
distinct(arr,k)
         

