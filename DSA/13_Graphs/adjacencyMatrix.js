import fs from "fs"
let data = fs.readFileSync("input.txt", "utf-8");
data = data.split(" ");
let rows = parseInt(data[0]);
let cols = parseInt(data[0]);
let matrix = [];

for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
        row.push(0);
    }
    matrix.push(row);
}
console.log(matrix);

let e = parseInt(data[1]);
for (let i = 2; i < e + 2; i++) {
    let edge = data[i].split(",");
    let x = parseInt(edge[0]);
    let y = parseInt(edge[1]);
    matrix[x][y] = matrix[y][x] = 1;
}
console.log(matrix);