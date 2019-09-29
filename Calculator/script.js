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
/* Determine if the equal button is clicked and evaluate if it is */
    if (eventTarget.currentTarget === equalsBtn) {
        let joinedValue = storedValues.join('');
        let calculatedValue = eval(joinedValue);
        screen.value = calculatedValue;
        return;
    }
    
    storedValues.push(value);
    let screenValues = storedValues.join('');
    
    if (eventTarget === operands) {
        screen.value = '';
    } else {
    screen.value = screenValues;
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
































// Add a value to the display screen

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener('click', function() {
//         screen.value = numbers[i].innerHTML;
//         previousValue = screen.value;
//         newValue = previousValue + screen.value;   
//     })
// }

