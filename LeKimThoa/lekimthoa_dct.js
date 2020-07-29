function T() {
    //       0  1  2  3  4  5
    let a = [7, 1, 4, 6, 3, 2];
    let temp = [];

    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        for (j = i; j < a.length; j++)
            if (a[i] < a[j]) {
                console.log(a[i] + ' ' + a[j]);
                for (k = j; k < a.length; k++) {
                    if (a[j] < a[k]) {
                        console.log(a[i] + ' ' + a[j] + ' ' + a[k]);
                    }
                }
            }
    }
}
