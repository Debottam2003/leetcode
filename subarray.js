function sub_arr(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let temp = [];
            for (let k = i; k <= j; k++) {
                temp.push(arr[k]);
            }
            res.push(temp);
        }
    }

    console.log(res);
}

sub_arr([1, 2, 3, 4, 5]);