/*
    Script for Calculator
*/

/*--Variables--*/
const
    btnAdd = document.getElementById('btn_add'),
    btnSoustract = document.getElementById('btn_soustract'),
    btnMultiple = document.getElementById('btn_multiple'),
    btnDivide = document.getElementById('btn_divise'),
    btnClear = document.getElementById('btn_clear'),
    inputNumber = document.getElementById('numberInput'),
    currentCalculationSpan = document.getElementById('calculation'),
    currentResultSpan = document.getElementById('result');

const defaultResult = 0;
let   currentResult = defaultResult;

/*--Functions--*/

/*--Print Result--*/

function createAndWritOutput(operator, resultBeforeCalc, calcNumber, resultFinal){
    const calcDescription = resultBeforeCalc + operator + calcNumber;
    currentCalculationSpan.textContent = calcDescription;
    currentResultSpan.textContent = resultFinal;
}

function operation(operationType){
    const enteredNumber = parseInt(inputNumber.value);
    if (!enteredNumber){
        return;
    }
    const initialCurrentResult = currentResult;
    let operationOperator;
    if (operationType === 'add') {
        currentResult = currentResult + enteredNumber;
        operationOperator = ' + ';
    }else if (operationType === 'soustract') {
        currentResult = currentResult - enteredNumber;
        operationOperator = ' - ';
    }else if (operationType === 'multiple'){
        currentResult = currentResult * enteredNumber;
        operationOperator = ' * ';
    }else{
        currentResult = currentResult / enteredNumber;
        operationOperator = ' / ';
    }
    createAndWritOutput(operationOperator, initialCurrentResult, enteredNumber, currentResult);
    inputNumber.value = 0
}


/*--Add Function--*/
function add() {
    operation('add');
}

/*--Soustraction Function--*/
function soustract() {
    operation('soustract');
}

/*--Multiplication Function--*/
function multiplication() {
    operation('multiple');
}

/*--Divide Function--*/
function divide() {
    operation('divide');
}

/*--Clear Input--*/
function clearInput(){
    inputNumber.value = 0;
    currentCalculationSpan.textContent = '0';
    currentResultSpan.textContent = '0'
}

/*--Click Button--*/

btnAdd.addEventListener('click', add);
btnSoustract.addEventListener('click', soustract);
btnMultiple.addEventListener('click', multiplication);
btnDivide.addEventListener('click', divide);
btn_clear.addEventListener('click', clearInput);