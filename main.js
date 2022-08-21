number1 = 0;
number2 = 0;
operation = ""

function start () {
    displayButtons();
    getOperation();


}

function reset(){
    document.querySelector(".display").textContent = "0";
    number1 = 0;
    number2 = 0;
}

function displayButtons() {
    let buttons = document.querySelectorAll('.number')
        buttons.forEach((button) => 
            button.addEventListener("click", () => {
                
                console.log(button.textContent)
                const text = button.textContent
                const textDisp = document.querySelector(".display").textContent
                if (textDisp === "0" ){
                    document.querySelector(".display").textContent = 
                    `${text}`

                } else { 

                document.querySelector(".display").textContent = 
                    `${document.querySelector(".display").textContent}${text}`
                }
                
            })
        )


}


function getOperation (){

    let sumButton = document.querySelector('.sum')
        sumButton.addEventListener("click", () => {
        
        number1 = document.querySelector(".display").textContent;
        document.querySelector(".display").textContent = "0";

        number1 = sum(number1,number2);
        console.log(sum(number1,number2))
     
        operation = "sum"
        

    }) 

    let subtractButton = document.querySelector('.subtract')
        subtractButton.addEventListener("click", () => {
            
            number1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent = "0";

            operation = "subtract"

        }) 

    let multiplyButton = document.querySelector('.multiply')
        multiplyButton.addEventListener("click", () => {
            
            number1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent = "0";

            operation = "multiply"

        })
        
    let divideButton = document.querySelector('.divide')
        divideButton.addEventListener("click", () => {
            
            number1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent = "0";

            operation = "divide"

        }) 

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
    const newNumber = parseInt(number1, 10) + parseInt(number2, 10)

    console.log(newNumber);
    
    number1 = newNumber;

    return newNumber;

}




function subtract(number1, number2) {
    const newNumber = number1 - number2
    console.log(newNumber);
    number1 = newNumber;
    return newNumber;

}

function multiply(number1, number2) {
    const newNumber = number1 * number2
    console.log(newNumber);
    number1 = newNumber;

    return newNumber;

}

function divide(number1, number2) {
    const newNumber = number1 / number2
    console.log(newNumber);
    number1 = newNumber;

    return newNumber;

}

start();