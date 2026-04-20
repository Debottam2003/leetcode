// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

let generate = function (numRows) {
    let res = [];
    if (numRows === 1) {
        return [[1]];
    }
    if (numRows === 2) {
        return [[1], [1, 1]]
    }
    res.push([1]);
    res.push([1, 1]);
    for (let i = 3; i <= numRows; i++) {
        let temp = [1];
        let l = res[res.length - 1];
        for (let j = 0; j < l.length - 1; j++) {
            temp.push(l[j] + l[j + 1])
        }
        temp.push(1);
        res.push(temp);
    }
    return res;
};

console.log(generate(5));