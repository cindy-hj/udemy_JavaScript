const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber 
        // ! 는 if not의 의미.. 만약 입력된 값이~가 아니면
        // 따라서 !enteredNumber는 입력된 값이 0이라면 참을 반환한다.

        // jvavascript에서는 비교 연산자 없이도 조건문에서 변수를 사용할수 있다!
        // 전달된 변수를 boolean값으로 강제 변환하려고 해석(실제 변환하는것 아님!)
        // 이때 false로 해석된 값을 falsy, true로 해석된 값 truthy라고 한다
        // 0 -> false
        // 0이 아닌 모든 수(음수 포함)는 참 -> true
        // 비어있는 string ''->false
        // 비어있지 않은 string->true
        // 비어있는 배열이나 객체 {}, []->true
        // null, undefined, NaN->false
        
    ) {
        return;
    }

    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' ||
    //     calculationType === 'MULTIPLLY' ||
    //     calculationType === 'DIVDE'
    // ) {
        
        const initialResult = currentResult;
        let mathOperator;
        if (calculationType === 'ADD') {
            currentResult += enteredNumber;
            mathOperator = '+';
        } else if (calculationType === 'SUBTRACT') {
            currentResult -= enteredNumber;
            mathOperator = '-';
        } else if (calculationType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathOperator = '*';
        } else if (calculationType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathOperator = '/';
        }
        createAndWriteOutput(mathOperator, initialResult, enteredNumber);
        writeToLog(calculationType, initialResult, enteredNumber, currentResult);
    // }
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
