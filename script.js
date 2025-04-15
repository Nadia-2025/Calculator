function appendNumber(number) {
    document.getElementById("display").value += number;
}

function setOperation(operator) {
    document.getElementById("display").value += operator;

}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;

    } catch (error) {
        document.getElementById("display").value = "Error";

    }
    
}