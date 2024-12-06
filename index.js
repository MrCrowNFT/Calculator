//Calculator

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input
}

function calculate(){
    //eval basically calculates an expression
    //this can cause an error
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = ""
}