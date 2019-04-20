var readlineSync=require('readline-sync');
const month=process.argv[2];
const year=process.argv[3];
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var days=[ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if(month==2 && isLeapYear(year))
{
    days[2]=29;
}
console.log("   " + months[month] + "  " + year);
console.log("S M T W T F S");
//var daysArray=["S","M","T","W","T","F","S"];
var d=day(month,year,months);
var calender=set2DArray(6,7);
console.log(calender);
function set2DArray(rows,columns)
{
    var array=new Array(rows);
    for(var index=0;index<rows;index++)
    {
        array[index]=new Array(columns);
    }
return array;
}


function day(month,year,months)
{
    var date, dateObj, startingDay;
    date = "1 "+ months[month - 1] +" "+ year;  // gives a date in formate of 1 January 2019.
    dateObj = new Date (date);
    startingDay = dateObj.getDay();                 // gives a starting day of week of entered month.
    return startingDay;
}
function isLeapYear(y)
{
    if((y%400==0)||(y%4==0 && y%100!=0))
    {
        return true;
    }
return false;
}
