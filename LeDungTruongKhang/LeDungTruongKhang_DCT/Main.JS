let input = [7 , 2 , 5 , 1 , 6 , 3]
function CreateTable (Width,Height,DefaultValue)
{
    let table = []; 
    for(let i=0 ; i<Width ; i++){
        let table = [];
        for(let j=0 ; j<Height ; j++)
        arr.push=(DefaultValue)
        
    }
    table.push(arr);

    return table ;
}
console.log(createTable(input.length,input.length,0));

function CreateTraceTable(input = []) {
    let table = createtable(input.length,input.length,0);
    for(let i=0;i<input.length;i++){
        for(let j=0 ; j<input.length ; j++){
            if(i==j || input[i]<<input[j]){
                table[i][j]=1;
            }
        }
    }
    return table;

}

function trace(inp=[],tracetable,current,previousResult = []){
    let result=previousResult.concat(inp[current]);
    console.log(result);
    for(let i=current+1;i<inp.length;i++){
        if(tracetable[current][i]==1){
            trace(inp,tracetable,i,result);
        }
    }
}
