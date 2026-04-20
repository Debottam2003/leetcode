l1 = [5,2,3,4,1]
l2 = sorted(l1)
miss = 0
for i in range(len(l1)):
    if l1[i] != l2[i]:
        miss += 1
print(miss)