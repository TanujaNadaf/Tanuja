/***************************************************************************************************************************
 *  @Purpose : To read the file and replace the the file with our own information
 *  @file    : regularExpression.js
 *  @author  : Tanuja Nadaf
 *  @since   : 24/04/2019
 */
/* import the file stream */
var fs=require('fs');
/* read the file using file stream objet */
var message=fs.readFileSync('message.txt','UTF-8',(data,err)=>{
    if(err) throw "File not found"
});
/* replace the the message with our information */
var message=message.replace(/<<name>>/i,"Tanuja",);
var message=message.replace(/<<full name>>/i,"Tanuja Nadaf");
var message=message.replace(/xxxxxxxxxx/i,"9972378736");
var date=todayDate();
var message=message.replace(/ddmmyyyy/i,date);
fs.writeFile('message.txt',message,'UTF-8',(data,err)=>{
    if(err) "Data is not written to file"
});
console.log(message);

/* calculate the current date */
function todayDate()
{
    var dateObject=new Date();
    var dd=String(dateObject.getDate()).padStart(2,'0');
    var mm=String(dateObject.getMonth()).padStart(2,'0');
    var yyyy=dateObject.getFullYear();
    dateObject=dd+'/'+mm+'/'+yyyy;
    return dateObject;
}