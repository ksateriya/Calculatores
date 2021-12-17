const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const secondaryScreen = document.querySelector(".secondary-screen");

const updateSecondary = (number) => {
    secondaryScreen.value = number;
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let currentOperator = '';

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
        scCurrentnumber = number;
    }else {
        currentNumber += number;
        scCurrentNumber =currentNumber;
    }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        currentOperator = operator.value
        inputOperator(event.target.value);
        updateSecondary(currentOperator);
    });
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
};

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case "^":
            result = Math.pow(parseFloat(prevNumber), parseFloat(currentNumber));
            break;
        case "√":
            result = Math.pow(parseFloat(prevNumber), 1/parseFloat(currentNumber));
            break;
        case "%" :
            result = parseFloat(prevNumber) / parseFloat(100);
            break;
        default:
            return;
    };
    currentNumber = result;
    calculationOperator = '';
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", (event) => {
    calculate(event);
    updateScreen(currentNumber);
    updateSecondary("");
});

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

const clearBtn = document.querySelector(".all-clear"); 

clearBtn.addEventListener("click", (event) => {
    clearAll(event);
    updateScreen(currentNumber);
    updateSecondary("");
});

const decimal = document.querySelector(".decimal");

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    };
    currentNumber += dot;
}

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});