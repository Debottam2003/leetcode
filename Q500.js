var findWords = function (words) {
    let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    for (let i in rows) {
        rows[i] = rows[i].split("");
    }
    console.log(rows);
    let res = [];
    for (let i of words) {
        for (let k of rows) {
            let flag = 1;
            for (let j of i) {
                if (!k.includes(j.toLowerCase())) {
                    flag = 0;
                    break;
                }
            }
            if (flag === 1) {
                res.push(i);
                break;
            }
        }
    }
    return res;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));