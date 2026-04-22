Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

    'a' maps to "dog".
    'b' maps to "cat".

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false

Constraints:
    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function (pattern, s) {
    let words = s.split(" ");
    if (pattern.length !== words.length) return false;

    let map1 = new Map(); // char → word
    let map2 = new Map(); // word → char

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        if (map1.has(char)) {
            if (map1.get(char) !== word) return false;
        } else {
            map1.set(char, word);
        }

        if (map2.has(word)) {
            if (map2.get(word) !== char) return false;
        } else {
            map2.set(word, char);
        }
    }

    return true;
};

// var wordPattern = function (pattern, s) {
//     let chars = [];
//     s = s.split(" ");
//     console.log(s);
//     for (let i = 97; i <= 122; i++) {
//         chars.push(String.fromCharCode(i));
//     }
//     console.log(chars);
//     let visited = [];
//     let mapping = {};
//     let res = [];
//     let j = 0;
//     for (let i of s) {
//         if (!visited.includes(i)) {
//             visited.push(i);
//             mapping[i] = j;
//             res.push(chars[j]);
//             j++;
//         }
//         else {
//             res.push(chars[mapping[i]]);
//         }
//     }
//     console.log(mapping);
//     console.log(res);
//     return pattern === res.join("");
// };

// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("abba", "dog dog dog dog"));