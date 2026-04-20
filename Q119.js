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