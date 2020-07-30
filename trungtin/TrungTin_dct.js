function arr (n){
    
    console.log("Chuoi 1")
    for(let z = 0; z < n.length;z++){
        console.log(n[z]);
    }

    console.log("Chuoi 2")
    for(let i = 0; i < n.length; i++) {
        for(let j = 1; j <= n.length - i; j++){
            if(n[i] < n[j]){
                console.log(n[i] + ' and ' + n[j])
            }
        }

    }

    console.log("Chuoi 3")
    for(let h = 0; h < n.length;h++){
        for(let k = 1; k <= n.length - h;k++){
            if(n[h] < n[k]){
                let temp = n[k];
                for(let a = k; a < n.length;a++){
                    if (temp < n[a]){
                        console.log(n[h] + ' and ' + n[k] + ' and ' + n[a]);
                    }
                }
                
            }
        }
    }
}
let n = [7,1,4,6,3,2]
//version 0.0
arr(n)
