l = [[0,3,0,4,2],[5,4,2,4,1],[5,0,0,4,1],[2,0,1,0,3]]
score = 0
l2 = []
for i in range(len(l)):
    l1 = []
    for j in range(len(l[i])):
        l1.append(l[i][j])
    m = l1[::-1]
    score = score + max(l1)
    if(l1.count(max(l1)) > 1):
          index = (len(l1)-1)-m.index(max(m))
          l2.append(index)
    else:
          index = l1.index(max(l1))
          l2.append(index)
print(l2)
for i in range(len(l2)-1):
    if(l2[i] != l2[i+1]):
        score -= abs(l2[i] - l2[i + 1])
print(score)
# l = [5,0,4,3,2,5,0,1]
# l = l[::-1]
# max = max(l)
# print((len(l)-1) - l.index(max))