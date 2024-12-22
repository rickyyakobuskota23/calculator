const buttons = document.querySelectorAll('.mybutton');
const display = document.getElementById('display-below');
const deleteButton = document.getElementById('delete-button')
const clearButton = document.getElementById('clear-button');
const equalsButton = document.getElementById('equals');
const displayAbove = document.getElementById('display-above')

buttons.forEach(mybutton => {
    mybutton.addEventListener('click', function() {
        display.value += this.value;
    });
});

deleteButton.addEventListener('click', function() {
    display.value = display.value.slice(0, -1);
});

clearButton.addEventListener('click', function() {
    display.value = '';
    displayAbove.value = '';
});

equalsButton.addEventListener('click', function() {
    try {
        displayAbove.value = display.value;

        const processedExpression = display.value.replace(/(\d+)%/g, (match, number) => {
            return Number(number) / 100;
        })
        display.value = eval(processedExpression);
    } catch (error) {
        display.value = 'error';
    }
});