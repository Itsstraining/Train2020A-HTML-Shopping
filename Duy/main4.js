input = [2, 1, 6, 2, 3, 9, 2];
let count=0;
function createTable(width){
    let table =[];
    for(let i=0;i< width;i++)
    {
        let arr=[];
       if(input[i] == input[i+1])
       {
           count ++;
           console.log(arr.push(input[i])+1);
       }
       else{
           input.pop();          
       }
       table.push(arr);
    }
    console.log("Số lần lặp:" + count);
    return table;
}

createTable(input.length);
