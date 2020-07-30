let n = 5;
function Creatable(n, defaulfValues) {
    let table = [];
    for (let i = 0; i < n; i++) {
        let arr = []
        for (let j = 0; j < n; j++)
            arr.push(defaulfValues);
        table.push(arr);
    }
    return table;
}
console.log(Creatable(n, 0));
function CreateTraceTable(n= []) {
    let table = Creatable(n, 0);
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i ==(n-1)/2 || j==(n-1)/2)
                
                table[(n-1)/2][(n-1)/2] = 1;
        }
    }
    return table;
}
console.log(CreateTraceTable(n));
function spiral(length) {
    let len = 0,
        xuong = length - 1,
        trai = 0,
        phai = length - 1,
        i = len,
        j = trai,
        result = Array.from({ length }, _ => []),
        value = length * n;

    while (true) {
        if (trai++ > phai) break;

        for (; i < xuong; i++) result[i][j] = value--;
        if (xuong-- < len) break;

        for (; j < phai; j++) result[i][j] = value--;
        if (phai-- < trai) break;

        for (; i > len; i--) result[i][j] = value--;
        if (len++ > xuong) break;

        for (; j > trai; j--) result[i][j] = value--;
    }

    result[i][j] = value--;
    return result;
}

let arr=[];
{
    console.log(spiral(n));
    console.log("\n");
}