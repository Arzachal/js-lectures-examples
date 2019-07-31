var now = new Date(); // returns datetime of the moment

new Date(year, month, day, hours, minutes, seconds, milliseconds)// returns date time of choose
//month takes values 0 to 11
var definedDateTime = new Date(2019, 6, 17, 3, 25, 12, 320);// returns Wed Jul 17 2019 03:25:12 GMT+0300 (GMT+03:00)
var dateTimeFromMiliseconds = new Date(1563323112320); //returns Wed Jul 17 2019 03:25:12 GMT+0300 (GMT+03:00)
// datetime as miliseconds can be get with getTime() method of Date()
var now = new Date().getTime(); // returns datetime of the moment as miliseconds 
var dateTimeFromString = new Date("August 17, 1988 03:00:00"); // returns datetime of August 17, 1988 03:00:00