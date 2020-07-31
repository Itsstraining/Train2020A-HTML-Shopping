let Ans = 0;
function tinhSin(){
    let input = document.getElementById("inputValue");
    let value = input.value;
    let result = Math.sin(value);
    input.value = result;
}
function tinhCos(){
    let input = document.getElementById("inputValue");
    let value =input.value;
    let result = Math.cos(value);
    input.value = result;
}
function tinhTan(){
    let input = document.getElementById("inputValue");
    let value =input.value;
    let result = Math.tan(value);
    input.value = result;
}
function luuAns(){
        let input = document.getElementById("inputValue");
        let value =input.value;
        Ans = value;
        input.value = "Ans";
}

function enableCalculator() {
    let form = document.getElementById("enable-calculator");
    
        if(form.style.display == "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }


    
}
