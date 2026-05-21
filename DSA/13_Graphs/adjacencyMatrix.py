matrix = []
# v = int(input("Enter the no of vertices: "))
with open("input.txt", "r") as f:
    data = f.read()
    data = data.split(" ")

rows = columns = int(data[0])

# Empty Matrix
for i in range(rows):
    temp = []
    for j in range(columns):
        temp.append(0)
    matrix.append(temp)

# edges = int(input("Enter the no of edges: "))
edges = int(data[1])
for i in range(2, edges + 2):
    # u = int(input(f"Enter the end vertices of edge:{i}: "))
    # v = int(input(f"Enter the end vertices of edge:{i}: "))
    u, v = data[i].split(",")
    u = int(u)
    v = int(v)
    matrix[u][v] = matrix[v][u] = 1

# Adjacency Matrix
for i in matrix:
    print(i)
