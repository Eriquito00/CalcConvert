function num1() {
    const display = document.getElementById('display');
    display.value = display.value + '1';
}

function num2() {
    const display = document.getElementById('display');
    display.value = display.value + '2';
}

function num3() {
    const display = document.getElementById('display');
    display.value = display.value + '3';
}

function num4() {
    const display = document.getElementById('display');
    display.value = display.value + '4';
}

function num5() {
    const display = document.getElementById('display');
    display.value = display.value + '5';
}

function num6() {
    const display = document.getElementById('display');
    display.value = display.value + '6';
}

function num7() {
    const display = document.getElementById('display');
    display.value = display.value + '7';
}

function num8() {
    const display = document.getElementById('display');
    display.value = display.value + '8';
}

function num9() {
    const display = document.getElementById('display');
    display.value = display.value + '9';
}

function num0() {
    const display = document.getElementById('display');
    display.value = display.value + '0';
}

function coma() {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', 'x', '÷', '%'];
    const lastNumber = display.value.split(/[\+\-\x\÷\%]/).pop();
    if (display.value !== '' && !lastNumber.includes(',')) {
        display.value = display.value + ',';
    }
}

function suma() {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', 'x', '÷', '%'];
    if (display.value !== '' && !operators.includes(lastChar)) {
        display.value = display.value + '+';
    }
}

function rest() {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', 'x', '÷', '%'];
    if (display.value !== '' && !operators.includes(lastChar)) {
        display.value = display.value + '-';
    }
}

function mult() {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', 'x', '÷', '%'];
    if (display.value !== '' && !operators.includes(lastChar)) {
        display.value = display.value + 'x';
    }
}

function divi() {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', 'x', '÷', '%'];
    if (display.value !== '' && !operators.includes(lastChar)) {
        display.value = display.value + '÷';
    }
}

function porc() {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', 'x', '÷', '%'];
    if (display.value !== '' && !operators.includes(lastChar)) {
        display.value = display.value + '%';
    }
}

function borranum() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function borrartodo() {
    var display = document.getElementById('display');
    display.value = '';
}

const fs = require('fs');

function result() {
    var display = document.getElementById('display');
    return result = display.value;
}