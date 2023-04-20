function plus() {
    let Number1 = +document.getElementById('number1').value;
    let Number2 = +document.getElementById('number2').value;
    let result;
    result = Number1 + Number2;

    document.getElementById('Result').innerHTML = result;
}

function minus() {
    let Number1 = +document.getElementById('number1').value;
    let Number2 = +document.getElementById('number2').value;
    let result;
    result = Number1 - Number2;

    document.getElementById('Result').innerHTML = result;
}

function multi() {
    let Number1 = +document.getElementById('number1').value;
    let Number2 = +document.getElementById('number2').value;
    let result;
    result = Number1 * Number2;

    document.getElementById('Result').innerHTML = result;
}

function divi() {
    let Number1 = +document.getElementById('number1').value;
    let Number2 = +document.getElementById('number2').value;
    let result;
    result = Number1 / Number2;

    document.getElementById('Result').innerHTML = result;
}

/*
let Number1 = +document.getElementById('number1').value;
let Number2 = +document.getElementById('number2').value;
let result;

function plus() {
    result = Number1 + Number2;
    document.getElementById('Result').innerHTML = result;
}

function minus() {
    result = Number1 - Number2;
    document.getElementById('Result').innerHTML = result;
}

function multi() {
    result = Number1 * Number2;
    document.getElementById('Result').innerHTML = result;
}

function divi() {
    result = Number1 / Number2;
    document.getElementById('Result').innerHTML = result;
}*/