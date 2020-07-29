// in ra các chuỗi sắp theo thứ tự tăng dần

let arr = [7, 1, 4, 6, 3, 2];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        for (j = i; j < arr.length; j++)
            if (arr[i] < arr[j]) {
                console.log(arr[i] + ' ' + arr[j]);
                for (k = j; k < arr.length; k++) {
                    if (arr[j] < arr[k]) {
                        console.log(arr[i] + ' ' + arr[j] + ' ' + arr[k]);
                    }
                }
            }
    }