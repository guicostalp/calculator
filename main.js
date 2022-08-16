number1 = 0;
number2 = 0;
operation = ""

function start () {
    displayButtons();
    getOperation();


}

function getOperation (){

    let sumButton = document.querySelector('.sum')
        sumButton.addEventListener("click", () => {
        
        number1 = document.querySelector(".display").textContent;
        document.querySelector(".display").textContent = "";

        operation = "sum"

    }) 

    let subtractButton = document.querySelector('.subtract')
        subtractButton.addEventListener("click", () => {
            
            number1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent = "";

            operation = "subtract"

        }) 

    let multiplyButton = document.querySelector('.multiply')
        multiplyButton.addEventListener("click", () => {
            
            number1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent = "";

            operation = "multiply"

        })
        
    let divideButton = document.querySelector('.divide')
        divideButton.addEventListener("click", () => {
            
            number1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent = "";

            operation = "divide"

        }) 

}

function displayButtons() {
    let buttons = document.querySelectorAll('.number')
        buttons.forEach((button) => 
            button.addEventListener("click", () => {
                
                const text = button.textContent
                document.querySelector(".display").textContent = 
                    `${document.querySelector(".display").textContent}${text}`
                
            })
        )


}

function reset(){
    document.querySelector(".display").textContent = "";
    number1 = 0;
    number2 = 0;
}


function operate (number1, number2, operation) {

    number2 = document.querySelector(".display").textContent;


    if (operation === "sum") {
        document.querySelector(".display").textContent = 
            `${sum(number1,number2)}`;

    } else if(operation === "subtract") {
        document.querySelector(".display").textContent = 
            `${subtract(number1,number2)}`;

    } else if(operation === "multiply") {
        document.querySelector(".display").textContent = 
            `${multiply(number1,number2)}`;

    } else {

        document.querySelector(".display").textContent = 
            `${divide(number1,number2)}`;
    }

}



function sum(number1, number2) {
    const newNumber = number1 + number2

    console.log(newNumber);    

    return newNumber;

}




function subtract(number1, number2) {
    const newNumber = number1 - number2
    console.log(newNumber);
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

start();