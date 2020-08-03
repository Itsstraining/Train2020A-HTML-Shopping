let arr =["2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","Ac","2r","3r","4r","5r","6r","7r","8r","9r","10r","Jr","Qr","Kr","Ar","2t","3t","4t","5t","6t","7t","8t","9t","10t","Jt","Qt","Kt","At","2b","3b","4b","5b","6b","7b","8b","9b","10b","Jb","Qb","Kb","Ab"];
let solabai = 10
let arr2 = shuffle(arr)
let arr13lb = []
for (i =0; i <= arr.length; i++ )
{
    if (arr13lb.length < solabai)
    { 
        let rand = arr[Math.floor (Math.random()*arr.length)];
          arr13lb.push(arr[i]); 
    }
}

function timchat ()
{
    let ch = ["c","r","t","b"];
    let rand = shuffle(ch)
    rand.splice(3, 1);
    return rand
   
}

function shuffle (arr1){
    let ctr = arr1.length, temp, index;
    while (ctr >0)
    {
        index = Math.floor(Math.random()*ctr);
        ctr--;
        temp = arr1[ctr];
        arr1[ctr]=arr1[index];
        arr1[index] = temp;
    }return arr1;
}

function tim_so_lan_xuat_hien (str,array){
    let count =0;
    for (j=0; j <array.length; j++)
    {
        
        if ( array[j].includes(str))
            {
                count = count + 1;
               
            }
           
           
    }

    return count;
}


let arr_temp = timchat();

function tim_so_la_bai_thuoc_chat (str_array,array){
    let find;
    let min;
    let max = 10;
for (k=0; k <str_array.length; k++)
    {
         find = tim_so_lan_xuat_hien(str_array[k],array);    
         min = find;
         if (min < max){
            max = min;
         }
    } 
   return max*str_array.length;
}


function tim_xac_suat (slcxh,array){
    let xs;
    xs = (slcxh / array.length);

    return xs.toFixed(2);

}

let slcxh = tim_so_la_bai_thuoc_chat(arr_temp,arr13lb);
let xac_suat = tim_xac_suat (slcxh,arr);




console.log (arr13lb);
console.log (arr_temp);
console.log (arr_temp.length);
console.log(tim_so_la_bai_thuoc_chat(arr_temp,arr13lb))
console.log(xac_suat)
//console.log(xac_suat.toFixed(2))