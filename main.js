let operator = '';
let previousOperand = '';
let currentOperand = '';

document.addEventListener('DOMContentLoaded', function(){
    let clear = document.querySelector('.clear');
    let del = document.querySelector('.delete');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');
    let operators = document.querySelectorAll('.operator');
    let numbers = document.querySelectorAll('.number');
    let previousDisplay = document.querySelector('.previous');
    let currentDisplay = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener('click', function(e){
        printNumber(e.target.textContent)
        currentDisplay.textContent = currentOperand;
    }));

    operators.forEach((opera) => opera.addEventListener('click', function(e){
        printOperator(e.target.textContent)
        previousDisplay.textContent = previousOperand + operator;
        currentDisplay.textContent = currentOperand;
    }));

    clear.addEventListener('click', function(e){
        previousOperand = '';
        currentOperand = '';
        operator = '';
        previousDisplay.textContent = currentOperand;
        currentDisplay.textContent = currentOperand;

    });

    del.addEventListener('click', function(e){
        currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1)
        currentOperand = currentDisplay.textContent;
    });

    equal.addEventListener('click', function(e){
        if(currentOperand != '' && previousOperand != ''){
            calculate();
            previousDisplay.textContent = '';
            currentDisplay.textContent = previousOperand;
        }
    })

    decimal.addEventListener('click', function(e){
        addDecimal();
    })
});

function printNumber(number){
    if(currentOperand.length <= 5){
        currentOperand += number;
    }
}

function printOperator(opera){
    operator = opera;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate(){
    previousOperand = Number(previousOperand);
    currentOperand = Number(currentOperand);
    if(operator === '+'){
        previousOperand += currentOperand;
    }
    else if(operator === '-'){
        previousOperand -= currentOperand;
    }
    else if(operator === '*'){
        previousOperand *= currentOperand;
    }
    else{
        previousOperand /= currentOperand;
    }

    previousOperand = Math.round(previousOperand * 1000) / 1000;
    previousOperand = previousOperand.toString();
    currentOperand = previousOperand.toString();    
}

function addDecimal(){
    if(!currentOperand.includes('.')){
        currentOperand += '.';
    }
}