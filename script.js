
function appendNumber(number) {
    document.getElementById("display").value += number;
};

function setOperation(operator) {
    document.getElementById("display").value += operator;

};

function clearDisplay() {
    document.getElementById("display").value = "";
};

let lastResult = localStorage.getItem("result");
if (lastResult) { document.getElementById("display").value = lastResult;

};
    

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;

        localStorage.setItem("result", result);

    } catch (error) {
        document.getElementById("display").value = "Error";

    }
};