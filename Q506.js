var findRelativeRanks = function (score) {
    let bound = score.length;
    let c = [...score];
    for (let i = 1; i <= bound; i++) {
        let max_val = Math.max(...c);
        // console.log(max_val);
        if (i === 1) {
            score[score.indexOf(max_val)] = "Gold Medal";
            // console.log(score.indexOf(max_val));
            console.log(score);
        } else if (i === 2) {
            score[score.indexOf(max_val)] = "Silver Medal";
            // console.log(score.indexOf(max_val));
            // console.log(score);
        } else if (i === 3) {
            score[score.indexOf(max_val)] = "Bronze Medal";
            // console.log(score.indexOf(max_val));
            // console.log(score);
        }
        else {
            score[score.indexOf(max_val)] = `${i}`;
            // console.log(score.indexOf(max_val));
            // console.log(score);
        }
        c = c.filter((val) => val !== max_val);
    }
    return score;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
