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