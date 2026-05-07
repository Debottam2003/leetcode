arr = ["flower", "flow", "flight"]
res = []
first = arr[0]

for j in range(len(first)):
    c = first[j]
    # print(c)
    flag = True
    for i in arr:
        if len(i) - 1 >= j:
            if c != i[j]:
                flag = False
                break
        else:
            flag = False
            break
    if flag:
        res.append(c)
    else:
        break

print("".join(res))
