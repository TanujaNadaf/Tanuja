var readlineSync=require('readline-sync');
const month=process.argv[2];
const year=process.argv[3];
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(months[month-1] + "  "+ year);
console.log(" S       M       T       W       T       F       S");
var startingDay=day(month,year,months);
var emptyCalendar=set2DArray(6,7);
var calender=set2DCalendar(emptyCalendar,startingDay,month,year)
function set2DCalendar(emptyCalendar,startingDay,month,year)
{
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 2 && isLeapYear(year))  
        days[1] = 29;
    
    
    var tempStartingDay = 0, start = 0;
    for (let i = 0; i < emptyCalendar.length; i++) 
    {
        var calendarString = "";
        for (let j = 0; j < emptyCalendar[i].length; j++) 
        {
            if (days[month - 1] != start) 
            {
                if (tempStartingDay == startingDay) 
                {
                    start++;
                    emptyCalendar[i][j] = start;                     // days.
                    if (start < 10)                             // spacing for 1 to 9 numbers.
                        emptyCalendar[i][j] = " " + start;
                    calendarString = calendarString + emptyCalendar[i][j]+"\t";  
                }
                else
                {
                    tempStartingDay++;
                    emptyCalendar[i][j] = "\t";                      // spacing before starting day.
                    calendarString = calendarString + emptyCalendar[i][j];
                }    
            }          
        }
        console.log(calendarString);
    }    
}
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