function createTable(size, defaultValue) {
    let tb = [];
    for (let i = 0; i < size; i++) {
        let arr = [];
        for (let j = 0; j < size; j++) {
            arr.push(defaultValue);
        }
        tb.push(arr);
    }
    return tb;
}
