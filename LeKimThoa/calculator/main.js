let Ans = 0;
function tinhSin ()
{
let input = document.getElementById("inputValue");
let value = input.value;
let result = Math.sin(value);
input.value = result;
}
function enableCalculator ()
{
    let form = document.getElementById("enableCalculator");
    form.style.display = "block";
}

function store
