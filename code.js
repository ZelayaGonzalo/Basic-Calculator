let firstNumber=0;
let secondNumber=0;
let operationID;
let screenText=document.getElementById("screen");
let curretnSign=document.getElementById("sign");
screenText.value="0";
erase();

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function addNumber(number){
    if(number==-1){
       screenText.value+="."
    }
    else{
        if(screenText.value==0){
            screenText.value=number;
        }
        else{
            screenText.value+=number;
        }
        }
    }
function backButton(){
    let newString=screenText.value;
    newString=screenText.value.slice(0,-1);
    screenText.value=newString;
}


function erase(){
    firstNumber=0;
    secondNumber=0;
    screenText.value="0";
    operationID=0;
    showCurrentOperation(0);
}

function operate(sign){
    if(operationID==0){
        firstNumber=parseFloat(screenText.value);
        operationID=sign;
        screenText.value=0;
    }
    else{
        equals();
        operationID=sign;
        firstNumber=parseFloat(screenText.value);

    }
    showCurrentOperation(sign);
   
}

function equals(){
    let result=0;
    if(operationID!=0){
        secondNumber=parseFloat(screenText.value);
        if(operationID!=0){
            switch(operationID){
                case 1:
                    result=add(firstNumber,secondNumber);
                    break;
                case 2:
                    result=subtract(firstNumber,secondNumber);
                    break;
                case 3:
                    result=multiply(firstNumber,secondNumber);
                     break;
                case 4:
                    result=divide(firstNumber,secondNumber);
                    break;
                default:
                    result="Error";
                    break;
            }
        }
        firstNumber=0;
        secondNumber=0;
        operationID=0;
        screenText.value=result;

    }
    else{
        result=screenText.value;
    }
    showCurrentOperation(0);
   
}

function showCurrentOperation(id){
    var currentOperation=id;
    switch(id){
        case 0:
            curretnSign.innerHTML="";
            break;
        case 1:
            curretnSign.innerHTML=firstNumber +"+";
            break;
        case 2:
            curretnSign.innerHTML=firstNumber +"-";
            break;
        case 3:
            curretnSign.innerHTML=firstNumber +"*";
            break;
        case 4:
            curretnSign.innerHTML=firstNumber +"/";
            break;
        default:
            curretnSign="";
            break;
            
    }
}
