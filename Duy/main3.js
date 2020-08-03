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
// function soTangDan() {
//     let i = 0;
//     let arr = [7, 1, 4, 6, 3, 2];
//     let arr2 = [];
//     let count = 1;
//     for (i = 0; i < arr.length - 1; i++) {
//         console.log(arr[i]);
//         if (arr[i] < arr[i + 1]) {
//             arr2.push(arr[i]);
//             console.log(arr2);
//             count++;
//         }
//     }
//     if (i < arr.length) {
//         console.log(arr[i]);
//         console.log("Đếm : " + count)
//     }
// }

// soTangDan()

// Sửa bài
input = [7, 2, 5, 1, 6, 3];

function createTable(width, height, defaultValue) {
    let table = [];
    for (let i = 0; i < width; i++) {
        let arr = [];
        for (let j = 0; j < height; j++) {
            arr.push(defaultValue);
        }
        table.push(arr)
    }
    return table;
}

function createTraceTable(input = []) {
    let table = createTable(input.length, input.length, 0);
    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            if (i == j || input[i] < input[j]) {
                table[i][j] = 1;
            }
        }
    }
    return table;
}

function trace(inp = [], traceTable, current, previousResult = []) {
    let result = previousResult.concat(inp[current]);
    console.log(result);
    for (let i = current + 1; i < input.length; i++) {
        if (traceTable[current][i] == 1) {
            trace(input, traceTable, i, result);
        }
    }
}
let traceTable = createTraceTable(input);
for (let i = 0; i < input.length; i++) {
    trace(input, traceTable, i, []);
}