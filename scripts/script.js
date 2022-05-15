const buttons = document.querySelectorAll('.number-operator');
const displayResult = document.getElementById('result');
const procedure = document.getElementById('procedure');
const remove = document.getElementById('remove');
const clear = document.getElementById('clear');
let current_operator = null;
let first_value = 0;
let second_value = 0;

function getFirstValue(button){
    switch(button){
        case "+":
            procedure.textContent = displayResult.textContent;
            first_value = parseFloat(displayResult.textContent.slice(0, -1));
            current_operator = "+";
            displayResult.innerHTML = "&nbsp";
            break;
        case "-":
            procedure.textContent = displayResult.textContent;
            first_value = parseFloat(displayResult.textContent.slice(0, -1));
            current_operator = "-";
            displayResult.innerHTML = "&nbsp";
            break;
        case "*":
            procedure.textContent = displayResult.textContent;
            first_value = parseFloat(displayResult.textContent.slice(0, -1));
            current_operator = "*";
            displayResult.innerHTML = "&nbsp";
            break;
        case "/":
            procedure.textContent = displayResult.textContent;
            first_value = parseFloat(displayResult.textContent.slice(0, -1));
            current_operator = "/";
            displayResult.innerHTML = "&nbsp";
            break;
    }
}

function getSecondValue(button){
    switch(button){
        case "=":
            if (first_value == 0){
                displayResult.innerHTML = "&nbsp";
            } else {
                second_value = parseFloat(displayResult.textContent.slice(0, -1)) || 0;
                procedure.textContent += second_value;
                operate();
            }
            break; 
    }
}

function operate(){
    switch(current_operator){
        case "+":
            displayResult.textContent = Math.round((first_value + second_value) * 100) / 100;
            break;
        case "-":
            displayResult.textContent = Math.round((first_value - second_value) * 100) / 100;
            break;
        case "/":
            displayResult.textContent = Math.round((first_value / second_value) * 100) / 100;
            break;
        case "*":
            displayResult.textContent = Math.round((first_value * second_value) * 100) / 100;
            break;
    }
}

remove.addEventListener('click', ()=> {
    if (displayResult.innerHTML != "&nbsp;"){
        displayResult.textContent = displayResult.textContent.slice(0, -1);
    }
})

clear.addEventListener('click', ()=> {
    window.location.reload();
})

buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
        const button_value = button.textContent;
        
        /*Point handler*/
        if(displayResult.textContent.includes(".")){
            if (button_value != "."){
                displayResult.textContent += button_value;
            }
        } else {
            displayResult.textContent += button_value;
        }

        getFirstValue(button_value);
        getSecondValue(button_value);
    })
});