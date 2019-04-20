var readlineSync=require('readline-sync');

var monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
var year = readlineSync.questionInt("Enter year");
var month = readlineSync.questionInt("month  ")
var date = "1 " + monthArray[month-1] + year;
dateObj = new Date(date);
console.log(dateObj.getDay());
