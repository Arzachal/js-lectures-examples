//function definition
function greetWorld() {
    alert("Hello World");
}
// function call 
greetWorld();

// return
function multiply(a,b){
    return a*b;
}
var x = multiply(3,5) // x = 15

// Global ve local variables

var globalVariable = "text";

function dummyFunc(){
    globalVariable = "number";
    // globalVariable available
    var localVariable = "text";
}
// localVariable is not available
localVariable