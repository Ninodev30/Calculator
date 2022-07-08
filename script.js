let inputResult = document.getElementById("result");

function insert(num) {
    inputResult.value = inputResult.value + num;
}

function percent() {
    inputResult.value = inputResult.value/100;
}

function round() {
    inputResult.value = parseFloat(inputResult.value).toFixed(2);
}

function deleteNumber() {
    inputResult.value = inputResult.value.substring(0 , inputResult.value.length - 1);
}

function clean() {
    inputResult.value = null;
}

function fractionBy1() {
    inputResult.value = 1 / (inputResult.value);
}

function square() {
    inputResult.value = Math.pow(inputResult.value, 2);
}
function squareRoot() {
    inputResult.value = Math.sqrt(inputResult.value);
}

function invertSignal() {
    inputResult.value = -inputResult.value
}

function equal() {

    if (inputResult.value) {
        inputResult.value = eval(inputResult.value);
    }
    else {
        inputResult.value = "ERROR"
    }

}