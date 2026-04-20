/**
 * @author Debottam Kar
 */
// var reverseBits = function(n) {
//     let binaryStr = n.toString(2).padStart(32, '0'); // convert to 32-bit binary string
//     let reversedStr = binaryStr.split('').reverse().join('');
//     return parseInt(reversedStr, 2); // convert back to integer
//   };

// console.log(reverseBits(11));
// console.log((5).toString(2));
// function print(i){
//     if(i <= 1){
//         return i;
//     }
//     let sum = i;
//     sum += print(i - 1);
//     return sum;
// }
// console.log(print(10));

let user = {
    username: "debottam kar",
    age: 22,
}
user["cgpa"] = 8.148;
let i = "username"
console.log(user[i]);
console.log(user);
