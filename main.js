number1 = 0;
number2 = 0;

function reset(){

    document.querySelector(".display").textContent = "asd";
    number1 = 0;
    number2 = 0;

}

let buttons = document.querySelectorAll('button')
    buttons.forEach((button) => 
        button.addEventListener("click", () => {

            
            const text = button.textContent
            document.querySelector(".display").textContent = `${document.querySelector(".display").textContent}${text}`
            
            number1 = document.querySelector(".display").textContent;
            console.log(number1);
        })
    )


function operate (number1, number2, operation) {
    if (operation === "+") {
        return sum(number1,number2);

    } else if(operation === "-") {

        return subtract(number1, number2);
    } else if(operation === "*") {

        return multiply(number1, number2);
    } else {

        return divide(number1, number2);
    }

}



function sum(number1, number2) {
    const newNumber = number1 + number2

    return newNumber;

}

function subtract(number1, number2) {
    const newNumber = number1 - number2

    return newNumber;

}

function multiply(number1, number2) {
    const newNumber = number1 * number2

    return newNumber;

}

function divide(number1, number2) {
    const newNumber = number1 / number2

    return newNumber;

}