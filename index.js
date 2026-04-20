/**
 * @author Debottam Kar
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let num1 = [], num2 = [];
    for (let i of a) {
        num1.push(Number(i));
    }
    for (let i of b) {
        num2.push(Number(i));
    }
    let x = 0, y = 0;
    for (let i = num1.length - 1, j = 0; i >= 0; i--, j++) {
        x += num1[i] * (2 ** j);
    }
    for (let i = num2.length - 1, j = 0; i >= 0; i--, j++) {
        y += num2[i] * (2 ** j);
    }
    let res = 0;
    res = x + y;
    let digit = 0;
    let arr = [];
    while (res >= 1) {
        digit = res % 2;
        arr.push(digit);
        res = Math.floor(res / 2);
    }
    return arr.reverse().join("");
};

console.log(addBinary("1010", "1011"));