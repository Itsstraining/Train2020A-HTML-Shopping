// let dayStar = 4;
// let yearStar = 2020;
// let monthStar = 7;
// let dayofweek;

// function checkYear(year) {
//     if ((year % 4 == 0 && year % 100 == 0) || year % 400 == 0) {
//         console.log("Năm nhuận");
//     } else {
//         console.log("Năm không nhuận")
//     }

//     return year;
// }

// function checkMonth() {

// }

// function checkDay() {

// }

// let day = document.getElementById("day").value;
// let month = document.getElementById("month").value;
// let year = document.getElementById("year").value;
// console.log(day);
function soTangDan() {
    let i = 0;
    let arr = [7, 1, 4, 6, 3, 2];
    let arr2 = [];
    let count = 1;
    for (i = 0; i < arr.length - 1; i++) {
        console.log(arr[i]);
        if (arr[i] < arr[i + 1]) {
            arr2.push(arr[i]);
            console.log(arr2);
            count++;
        }
    }
    if (i < arr.length) {
        console.log(arr[i]);
        console.log("Đếm : " + count)
    }
}

soTangDan()