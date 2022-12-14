//FUNCTION FOR DATA INPUT
function addChar(input, character){
    if(input.value==null || input.value==0)
    input.value=character
    else
    input.value+=character
}

//FUNCTION FOR DELETING CHARACTER
function deleteChar(input){
    input.value=input.value.substring(0, input.value.length - 1)
}

//FUNCTION FOR CALCULATING COS
function cos(form){
    form.display.value = Math.cos(form.display.value);
}

//FUNCTION FOR CALCULATING SIN
function sin(form){
    form.display.value = Math.sin(form.display.value);
}

//FUNCTION FOR CALCULATING TAN
function tan(form){
    form.display.value = Math.tan(form.display.value);
}

//FUNCTION FOR CALCULATING SQUARE ROOT
function sqrt(form){
    form.display.value = Math.sqrt(form.display.value);
}

//FUNCTION FOR CALCULATING LOGRITHM
function ln(form){
    form.display.value = Math.log(form.display.value);
}

//FUNCTION FOR CALCULATING EXP
function exp(form){
    form.display.value = Math.exp(form.display.value);
}

//FUNCTION FOR COMPUTATION
function compute(form){
    form.display.value = eval(form.display.value);
}

//FUNCTION FOR CALCULATING PERCENTAGE
var val = 0.0;
function percent(input){
    val=input.value;
    input.value=input.value / 100;
}

function changeSign(input){
    if(input.value.substring(0,1) == "-")
    input.value = input.value.substring(1, input.value.length)
    else
    input.value = "-" + input.value
}


//FUNCTION FOR CALCULATING SQUARE
function square(form){
    form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str){
    for(var i=0; i<str.length; i++){
        var ch = str.charAt(i);
        if(ch< "0" || ch > "9") {
            if(ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
             && ch != "(" && ch != ")" && ch != "%"){
                alert("invalid entry!")
                return false
             }
        }
    }
    return true
}
