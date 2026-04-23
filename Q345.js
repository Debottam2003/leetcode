// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:
// Input: s = "leetcode"

// Output: "leotcede"

// Constraints:
//     1 <= s.length <= 3 * 10^5
//     s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = [];
    for (let i of s) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'
            || i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U') {
            vowels.push(i);
        }
    }
    vowels.reverse();
    let index = 0;
    let str = "";
    for (let i in s) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'
            || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
            str += vowels[index++];
        }
        else {
            str += s[i];
        }
    }
    return str;
};