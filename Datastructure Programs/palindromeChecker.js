var access=require('./Dequeue');
var readlineSync=require('readline-sync');
var dequeue=new access.Dequeue();
var string=readlineSync.question("Enter the string to check whether it is a palindrome");
var result=dequeue.isPalindrome(string);
console.log(result);
if(result==true)
{
    console.log("The given string is a palindrome");
    
}
else
{
    console.log("The given string is not a palindrome");
    
}
