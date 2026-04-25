// Given an integer num, return a string of its base 7 representation.

// Example 1:
// Input: num = 100
// Output: "202"

// Example 2:
// Input: num = -7
// Output: "-10"

// Constraints:
//     -10^7 <= num <= 10^7

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    let clone = 0;
    if (!num) return "0";
    if (num < 0) {
        clone = num * (-1);
    }
    else {
        clone = num;
    }
    let str = "";
    while (clone > 0) {
        str += String(clone % 7);
        clone = Math.floor(clone / 7);
    }
    let res = "";
    if (num < 0) {
        res += "-"
    }
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
};