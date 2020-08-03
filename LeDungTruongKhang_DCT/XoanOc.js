let input = [0, 0, 0, 0, 0]
function createtable(width, height, DefaultValue) {
    let table = [];
    for (i = 0; i < width; i++) {
        let arr = [];
        for (j = 0; j < height; j++) {
            arr.push(DefaultValue);
        }
        table.push(arr);
    }
    return table;

}
console.log(createtable(input.length,input.length,0));




