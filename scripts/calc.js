function getDisplay() {
    return document.getElementById('display');
}

function appendNumber(number) {
    const display = getDisplay();
    display.value += number;
}

function appendOperator(operator) {
    const display = getDisplay();
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', 'x', '÷', '%'];
    if (display.value !== '' && !operators.includes(lastChar)) {
        display.value += operator;
    }
}

function appendComma() {
    const display = getDisplay();
    const lastNumber = display.value.split(/[\+\-\x\÷\%]/).pop();
    if (display.value !== '' && !lastNumber.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    const display = getDisplay();
    let expression = display.value;
    let result = expression.replace(/x/g, '*').replace(/÷/g, '/');
    result = result.replace(/(\d+(\.\d+)?)%(\d+(\.\d+)?)/g, '($3 * ($1 / 100))');
    try {
        const evalResult = eval(result);
        display.value = evalResult;
        operationHistory(evalResult, expression);
    } catch {
        display.value = 'Error';
    }
}

function operationHistory(result, expression) {
    const historyTag = document.getElementById('history');
    const operation = `${expression} = ${result}`;
    const updatedHistory = `${operation}\n${historyTag.textContent}`;
    historyTag.textContent = updatedHistory;
}

function deleteLast() {
    const display = getDisplay();
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    const display = getDisplay();
    display.value = '';
}