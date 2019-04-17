class Stack
{
    //creating a stack constructor
    constructor()
    {
    this.stack=[];
    this.size=0;
    this.top=-1;           
    }
//pushing the elements into stack
push(item)
{
    //pre increment the top value and then add the element to stack at top position
    this.size++;
    this.stack[++this.top]=item;
    return;
}
//pop or removing the elements from stack
pop()
{
    if(this.stack[this.top]==-1)
    {
        console.log("Stack Underflow");
        
    }
    else
    {
        //post decrement-pop the element from stack at top position and then decrease the top value 
        this.size--;
        return this.stack[this.top--];
        
    }
return;
}
isEmpty()
{
    if(this.top==-1)
    {
        return true;
    }
return false;
}
}
module.exports=
{
    Stack
}















