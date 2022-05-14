const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
let count = 0;

buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
        const value = button.innerHTML;
        result.innerHTML += value;

        switch(value){
            case  "+":
                console.log("suma");
                break;
            case  "-":
                console.log("resta");
                break;
            case  "*":
                console.log("multiplica");
                break;
            case  "/":
                console.log("divide");
                break;
            case  "=":
                console.log("resultado");
                break;
            case  ".":
                console.log("punto");
                break;
        }

    })
});