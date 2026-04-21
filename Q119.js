// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

// Constraints:
//     0 <= rowIndex <= 33

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let numRows = rowIndex + 1;
    let res = [];
    if (numRows === 1) {
        return [1];
    }
    if (numRows === 2) {
        return [1, 1]
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
    return res[rowIndex];
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));