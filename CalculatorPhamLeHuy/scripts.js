
let outputScreen = "";

let output = document.getElementById("current-operand");


function clearScreen() {
    outputScreen = '';
    output.innerText = '';
}


function Xoa() {
    
}

function compute(){
    let value = output.innerText;
    let equals = eval(value);
    output.innerText = equals;
}

function sin(){
    let value = output.innerText;
    let equals = Math.sin(value);
    output.innerText = equals;
}

function cos(){
    let value = output.innerText;
    let equals = Math.cos(value);
    output.innerText = equals;
}

function tan(){
    let value = output.innerText;
    let equals = Math.tan(value);
    output.innerText = equals;
}
function clicktoOperation(operand){
    outputScreen += `${operand}`;
    output.innerText = outputScreen;
}

function clickToAdd(number) {
    outputScreen += `${number}`;
    output.innerText = outputScreen;
}



// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')