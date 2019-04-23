var access=require("./QueueLinkedList");
const month=process.argv[2];
const year=process.argv[3];
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(months[month-1] + "  "+ year);
var queueLinkedListDay=new access.QueueLinkedList();
var queueLinkedListDate=new access.QueueLinkedList();
var daysArray=setDaysArrayUsingQueue();
console.log(daysArray);
function setDaysArrayUsingQueue()
{
    queueLinkedListDay.enqueue("Sun");
    queueLinkedListDay.enqueue("Mon");
    queueLinkedListDay.enqueue("Tues");
    queueLinkedListDay.enqueue("Wed");
    queueLinkedListDay.enqueue("Thurs");
    queueLinkedListDay.enqueue("Fri");
    queueLinkedListDay.enqueue("Sat");
    var weekDays="";
    for(let index=0;index<queueLinkedListDay.getSize();index++)
    {
        weekDays=weekDays+queueLinkedListDay.peek(index)+"  "+"\t";
    }
return weekDays;
}
var queueCalender=setQueueCalender(months);
console.log(queueCalender);
function setQueueCalender(months)
{
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 2 && isLeapYear(year))
    {  
        monthDays[1] = 29;
    }
for(let index=1;index<32;index++)
{
    queueLinkedListDate.enqueue(index);
}
var startingDay=day(month,year,months);
var calender="",start=0;
for(let index=0;index<startingDay;index++)
{
    calender=calender+"\t";
}
for(let index=0;index<queueLinkedListDate.getSize();index++)
{
    if((index+startingDay)%7==0)
    {
        calender=calender+"\n";
    }
    if(monthDays[month-1]!=start)
    {
        if(queueLinkedListDate.peek(start)<10)
        {
            calender=calender+" "+queueLinkedListDate.peek(start)+"\t";
        }
       else
       {
           calender=calender+queueLinkedListDate.peek(start)+"\t";
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