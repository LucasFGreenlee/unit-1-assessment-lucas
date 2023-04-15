const addBtn = document.querySelector("#add-btn");
const subtractBtn = document.querySelector("#subtract-btn");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addToValue();
});

subtractBtn.addEventListener("click", (e) => {
    e.preventDefault();
    subtractFromValue();
});

function addToValue(num1, num2, sum) {
    var num1, num2, sum;
    num1 = parseInt(document.getElementById("resultValue").value);
    num2 = parseInt(document.getElementById('inputValue').value);
    sum = (num1) + (num2);
    console.log(num1);
    console.log(num2);
    console.log(sum);
    document.getElementById('resultValue').value = sum;
}

function subtractFromValue(num1, num2, sub) {
    var num1, num2, sub;
    num1 = parseInt(document.getElementById("resultValue").value);
    num2 = parseInt(document.getElementById('inputValue').value);
    sub = (num1) - (num2);
    console.log(num1);
    console.log(num2);
    console.log(sub);
    document.getElementById('resultValue').value = sub;
}
