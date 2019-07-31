alert("Hello World!");

//Variables
var someVariable;

//Variable names 
var first-name // is not valid
var first_name // valid
var firstName // valid
var FirstName // valid

// Data-Types
    //Undefined
    var a;
    //Null
    var this_is_null = null;
    //Boolean
    var isJavascriptEasy = false;
    var isJavascriptAwesome = true;
    var isMathTrue =  2 + 2 === 4; // isMathTrue = true 
    var 
    //String
    var emptyString = "";
    var name = "Uğur";
    var surname = "Eliaçık";
    var fullName = name + " " + surname; // fullname = "Uğur Eliaçık"
    //Number
    var age = 31;
    var x = 4;
    var y = 7;
    var pi = 3.14;
    var z = x + y; //z = 11
    var xy = x * y; //xy = 28
    var t = x / y;  // t = 1.75
    var q = y % x;  // q = 3
    //Object
    var emptyObject = {};
    var car = {id: 985,brand: "BMW", model: "M3", year: 2008, km: 324139, forSale: true};
    car.km = 324150;
    car["year"];
    car.color = "red";
    delete car.color;
    //Array
    var planets = ["Mercury", "Venus", "Earth", "Mars", "Saturn", "Jupiter", "Uranus", "Neptune"];
    planets.length;
    planets[0];
    planets[6];
    planets[planets.length - 1];
    planets.push("Pluton");
    planets.pop("Pluton");
    //Date 
    var now = new Date(); // returns datetime of the moment
    new Date(year, month, day, hours, minutes, seconds, milliseconds)// returns date time of choose
    //month takes values 0 to 11
    var definedDateTime = new Date(2019, 6, 17, 3, 25, 12, 320);// returns Wed Jul 17 2019 03:25:12 GMT+0300 (GMT+03:00)
    var dateTimeFromMiliseconds = new Date(1563323112320); //returns Wed Jul 17 2019 03:25:12 GMT+0300 (GMT+03:00)
    // datetime as miliseconds can be get with getTime() method of Date()
    var now = new Date().getTime(); // returns datetime of the moment as miliseconds 
    var dateTimeFromString = new Date("August 17, 1988 03:00:00"); // returns datetime of August 17, 1988 03:00:00

//Functions

    //function definition
    function greetWorld() {
        alert("Hello World");
    }
    var greetWorldv2 = function() {
        alert("Hello World");
    }
    //function call 
    greetWorld();
    greetWorldv2();

    // return
    function multiply(a,b){
        return a*b;
    }
    var x = multiply(3,5) // x = 15

    // Global and local variables

    var globalVariable = "text";

    function dummyFunc(){
        globalVariable = "number";
        // globalVariable available
        var localVariable = "text";
    }
    // localVariable is not available
    localVariable
// Conditionals
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

// Iterations
    for(var i=0; i<10; i++){
        console.log(i);
    }
    for(var i=10; i>0; i--){
        console.log(i);
    }
    var cities = ["İstanbul", "İzmir", "Ankara"];
    var text = "";
    for(var i=0; i<cities.length; i++){
        text += cities[i] + ' ';
    }
    console.log(text);
    // text value will be İstanbul İzmir Ankara