/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let res = [];
    for (let i of operations) {
        let l = 0;
        if (i === "C") {
            res.pop();
            // console.log(res);
        } else if (i === "D") {
            l = res.length - 1;
            res.push(Number(res[l]) * 2)
            // console.log(res);
        } else if (i === "+") {
            l = res.length - 1;
            res.push(res[l] + res[l - 1])
            // console.log(res);
        }
        else {
            res.push(Number(i))
            // console.log(res);
        }
    }
    // console.log(res);
    let sum = 0;
    for (let i of res) {
        sum = sum + i;
    }
    return sum;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));