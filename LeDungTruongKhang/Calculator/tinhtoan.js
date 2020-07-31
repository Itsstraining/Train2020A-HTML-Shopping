function tinhsin(){
    let input = document.getElementById("inputValue");
    let value = input.value;
    let result= Math.sin(value);
    input.value = result;
}
function tinhtan(){
    let input = document.getElementById("inputValue");
    let value = input.value;
    let result = Math.tan(value);
    input.value = result;

}
function tinhcos(){
    let input = document.getElementById("inputValue");
    let value = input.value;
    let result = Math.cos(value);
    input.value = result;
}
let ans = 0;
function showAns(){
    let input = document.getElementById("inputValue");
    input.value += ans ;

}

function clickequal(){
    let input = document.getElementById("inputValue");
    let result = eval(input.value);
    input.value = result;
    ans = result;

}
    



    


