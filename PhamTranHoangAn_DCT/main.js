let arr = [7, 1, 4, 6, 3, 2];

function th1(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let a = [];
            if (arr[i] < arr[j]) {
                a.push(arr[i] ,arr[j]);
                console.log(a);
            }
        }
    }
}

th1(arr);

