
function calculate(operation) {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    let result;

    if (operation === "+") {result = num1 + num2;}
    else if (operation === "-") {result = num1 - num2;}
    else if (operation === "*") {result = num1 * num2;}
    else if (operation === "/") {
        if (num2 === 0) {alert("На ноль делить нельзя!");
            return;}
        result = num1 / num2;}

    document.getElementById("result").textContent = "Результат: " + result;}
function clearCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = 'Результат: ';}