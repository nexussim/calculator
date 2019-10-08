const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const equalsBtn = document.querySelector('.equals');
const numbers = document.querySelectorAll('.nums');
const screen = document.querySelector('.screen-display');
const operands = document.querySelectorAll('.operand');

let storedValues = [];

equalsBtn.addEventListener('click', updateScreen);

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', updateScreen);
}

for (let i = 0; i < operands.length; i++) {
    operands[i].addEventListener('click', performOperation);
}

/* Update the screen value */

function updateScreen(eventTarget) {
    let value = eventTarget.currentTarget.innerHTML;

    if (eventTarget.currentTarget === equalsBtn) {
        if (storedValues[storedValues.length - 1] === '+' ) {
            storedValues.splice(storedValues.length - 1, 1);
        } else if (storedValues[storedValues.length - 1] === '-') {
            storedValues.splice(storedValues.length - 1, 1);
        } else if (storedValues[storedValues.length - 1] === '/') {
            storedValues.splice(storedValues.length - 1, 1);
        } else if (storedValues[storedValues.length - 1] === '*') {
            storedValues.splice(storedValues.length - 1, 1);
        }
        
/* Check if first element in the storedValues array is an number. If it is, evaluate, otherwise clear the screen. */

        let parsedStringValue = parseInt(storedValues[0]);
        let isNumber = Number.isInteger(parsedStringValue);

        if (isNumber === false) {
            storedValues = [];
        } 

        let joinedValue = storedValues.join('');
        let calculatedValue = eval(joinedValue);
        screen.value = calculatedValue;

        if(storedValues.length === 0) {
            screen.value = '';
        }

        
        return;
    }

    storedValues.push(value);
    let screenValues = storedValues.join('');
    
    if (eventTarget === operands) {
        screen.value = '';
    } else {
        screen.value = screenValues;

    //     screen.value = eventTarget.currentTarget.innerHTML;
    
    // if (eventTarget === operands) {
    //     screen.value = '';
    // } 
    }
}

/* Check which operator is clicked and store that operator in the array. */

function performOperation(eventTarget) {
    let objectClicked = eventTarget.currentTarget.innerHTML;
    switch(objectClicked) {
        case '+':
            storedValues.push('+');
        break;
        case '-':
            storedValues.push('-');
        break;
        case '÷':
            storedValues.push('/');
        break;
        case 'x':
            storedValues.push('*');
        break;
    }

    if (eventTarget.currentTarget === operands[0]) {
        screen.value = '';
    }
    if (eventTarget.currentTarget === operands[1]) {
        screen.value = '';
    }
    if (eventTarget.currentTarget === operands[2]) {
        screen.value = '';
    }
    if (eventTarget.currentTarget === operands[3]) {
        screen.value = '';
    }
}

/* Clear the screens value */

clearBtn.addEventListener('click', function() {
    if(screen.value) {
        storedValues = []; 
        screen.value = '';
    }
});

/* Deletes 1 item from the screen */

deleteBtn.addEventListener('click', function() {
    storedValues.splice(storedValues.length - 1, 1);
    let joinedValue = storedValues.join('');
    screen.value = joinedValue;
})


