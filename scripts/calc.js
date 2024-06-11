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
    if (operator === '-' && display.value === '') {
        display.value += operator;
    } else if (display.value !== '' && !operators.includes(lastChar)) {
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
    if (result == ''){
        return;
    }
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
    const spacedExpression = expression.replace(/([\+\-\x\÷\%])/g, ' $1 ');
    const operation = `${spacedExpression} = ${result}\n\n`;
    let historyLines = `${operation}${historyTag.textContent}`.split('\n');
    historyLines = historyLines.slice(0, 20);
    historyTag.textContent = historyLines.join('\n');
}

function deleteLast() {
    const display = getDisplay();
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    const display = getDisplay();
    display.value = '';
}