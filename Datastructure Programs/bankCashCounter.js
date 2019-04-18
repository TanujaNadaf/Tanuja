var access=require('./Queue');
var readlineSync=require('readline-sync');
var bankcash=100000;
var flag=false;
//var put=[];
var queueob=new access.Queue();
var number=readlineSync.question("Enter the number of people in queue");
if(number>0)
{
    for(var i=1;i<=number;i++)
    {
        var ch=readlineSync.question("Enter the choices 1-Cash Deposit,2-Cash Withdrawal");
        if(ch==1)
        {
            var amount=readlineSync.question("Enter the amount to be deposited");
               queueob.enqueue(i);
            console.log("The amount is deposited in bank");   
            queueob.dequeue();
            bankcash=Number(bankcash)+Number(amount);
            console.log("The bank balance after depositing is",bankcash);
            
        }      
        if(ch==2)
        {
            var amount=readlineSync.question("Enter the amount to be withdrawn");
            queueob.enqueue(i);
            console.log("The amount is withdrawn");
            bankcash=Number(bankcash)-Number(amount);
            console.log("The bank balance after withdrawing",bankcash);
            
        }
    }
}
if(bankcash<10000)
{
    console.log("The cash is not maintained");
    
}
else
{
    console.log("The cash is maintained");
    
}
    
