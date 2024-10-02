function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    const display = document.getElementById("display");
    const lastChar = display.value[display.value.length - 1];

    if (display.value !== '' && !isNaN(lastChar)) {
        display.value += operator;
    }
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
