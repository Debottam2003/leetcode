let arr = ["flower", "flow", "flight"];
let first = arr[0];
let res = [];

for (let j = 0; j < first.length; j++) {
    let c = first[j];
    let flag = true;
    for (let i of arr) {
        if (i.length - 1 >= j) {
            if (c != i[j]) {
                flag = false;
                break;
            }
        } else {
            flag = false;
            break;
        }
    }
    if (flag) {
        res.push(c);
    } else {
        break;
    }
}

console.log(res.join(""));