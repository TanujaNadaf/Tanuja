var access=require('./StackLinkedList');
var month=process.argv[2];
var year=process.argv[3];
var months=["januray","February","March","April","May","june","July","August","September","October","November","December"];
console.log(months[month-1] + " " + year);
var stackLinkedListDay=new access.StackLinkedList();
var stackLinkedListRevDate=new access.StackLinkedList();
var stackLinkedListDate=new access.StackLinkedList();
var daysArray=setDaysArrayUsingStack();
console.log(daysArray);
function setDaysArrayUsingStack()
{
    stackLinkedListDay.push("Sat");
    stackLinkedListDay.push("Fri");
    stackLinkedListDay.push("Thurs");
    stackLinkedListDay.push("Wed");
    stackLinkedListDay.push("Tues");
    stackLinkedListDay.push("Mon");
    stackLinkedListDay.push("Sun");
    var weekDays="";
    for(let index=0;index<stackLinkedListDay.getSize();index++)
    {
        weekDays=weekDays+stackLinkedListDay.peek(index)+" "+"\t";
    }
    return weekDays;

}
var calender=setCalender(months);
console.log(calender);
function setCalender(months)
{
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(month==2 && isLeapYear(year))
    {
       monthDays[1]=29;
    }
for(let index=1;index<32;index++)
{
    stackLinkedListRevDate.push(index);
}
for(let index=0;index<stackLinkedListRevDate.getSize();index++)
{
    stackLinkedListDate.push(stackLinkedListRevDate.peek(index));
}
var startingDay=day(month,year,months);
var calender="",start=0;
for(let index=0;index<startingDay;index++)
{
    calender=calender+"\t";
}
for(let index=0;index<stackLinkedListDate.getSize();index++)
{
    if((index+startingDay)%7==0)
    {
        calender=calender+"\n";
    }
if(months[month-1]!=start)
{
    if(stackLinkedListDate.peek(start)<10)
    {
        calender=calender+" "+stackLinkedListDate.peek(start)+"\t";
    }
    else
    {
        calender=calender+stackLinkedListDate.peek(start)+"\t";
    }
start++;
}
}
return calender;
}
function day(month,year,months)
{
    var date, dateObj, startingDay;
    date = "1 "+ months[month - 1] +" "+ year;  // gives a date in format of 1 January 2019.
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