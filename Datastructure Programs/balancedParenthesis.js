var access=require('./Stack');
var readlineSync=require('readline-sync');
var stack=new access.Stack();
var string=readlineSync.question("Enter the expression to check for balanced parenthesis");
for(i=0;i<string.length;i++)
{
    var ch=string.charAt(i);
if(ch=='(')
{
   stack.push(ch);
}
else if(ch==')')
{
    if(stack.pop()!='(')
    {
        break;
    }
}
}
if(stack.isEmpty())
{
    console.log("The expression is balanced");
    
}
else
{
    console.log("The expression is not balanced");
    
}

