var a = 5;
// checking 1 condition
if (a > 0){
    console.log("a is greater than 0");
}
if (a <= 0){
    console.log("a is less than or equals to 0");
}
// checking 1 condition and it's opposite
if (a > 0){
    console.log("a is greater than 0");
}else {
    console.log("a is less than or equals to 0");
}
// checking 1 condition and checking another condition inside first condition's opposite then second condition's opposite :)
if (a > 0){
    console.log("a is greater than 0");
}else if(a === 0){
    console.log("a is equals to 0");
}else {
    console.log("a is less than 0");
}

//Multiple else if conditions

var vehicleType = "Car";
var boardingFee = 0;
if(vehicleType === "Car"){
    boardingFee = 20;
}else if(vehicleType === "Bike"){
    boardingFee = 10;
}else if(vehicleType === "Truck"){
    boardingFee = 30;
}else if(vehicleType === null){
    boardingFee = 5;
}else {
    boardingFee = null;
}


//Conditions without operators

if(x){
    // Do something
}else {
    // Do something
}

var x = 0; // returns false
var x = 1; // returns true
var x = -1; // returns true
var x = ""; // returns false
var x = "0"; // returns true
var x = []; //returns true
var x = {}; //returns true
var x = null; // returns false
var x = undefined; // returns false
// 0, "", null, undefined returns false. Every other value returns true


//switch case
var vehicleType = "Car";
var boardingFee = 0;
switch(vehicleType){
    case "Car":
        boardingFee = 20;
        break;
    case "Bike":
        boardingFee = 10;
        break;
    case "Truck":
        boardingFee = 30;
        break;
    default:
        boardingFee = 5;
}

// ternary operator
var age = 21;
var access = age >=18 ? "granted" : "denied";

if(age>=18){
    var access = "granted";
}else {
    var access = "denied";
}
