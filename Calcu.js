
var resultInput = document.getElementById("result");

function updateResult(value){
    resultInput.value += value;
}

function calculateResult(){
    try {
        var expression = resultInput.value;
        var result = eval(expression);
        resultInput.value = result;
    } catch (error){
        resultInput.value = "Error";
    }
}

function clearResult(){
    resultInput.value = "";
}

document.querySelectorAll(".keypad button").forEach(function(button){
    button.addEventListener("click", function(){
        var value = this.getAttribute("data-value");
        if (value==="="){
            calculateResult();
        } else if (value=== "c"){
            clearResult();
        } else{
            updateResults(value);
        }
    });

});
