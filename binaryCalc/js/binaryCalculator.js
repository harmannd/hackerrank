function addValue(value) {
    let res = document.getElementById("res");
    res.value += value;
}

function clearCalc() {
    let res = document.getElementById("res");
    res.value = "";
}

function eval() {
    let res = document.getElementById("res");
    let num1 = num2 = operator = text = "";
    let chars = res.value.split("");
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === "+" || chars[i] === "-" ||
            chars[i] === "*" || chars[i] === "/") {
            operator = chars[i];
        } else {
            if (operator) {
                num2 += chars[i];
            } else {
                num1 += chars[i];
            }
        }
    }
    switch (operator) {
        case "+":
            res.value = (parseInt(num1, 2) + parseInt(num2, 2)).toString(2);
            break;
        case "-":
            res.value = (parseInt(num1, 2) - parseInt(num2, 2)).toString(2);
            break;
        case "*":
            res.value = (parseInt(num1, 2) * parseInt(num2, 2)).toString(2);
            break;
        default:
            res.value = (parseInt(num1, 2) / parseInt(num2, 2)).toString(2);
    }
}