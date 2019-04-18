class Queue
{
    constructor()
    {
        this.front=-1;
        this.rear=-1;
        this.queue=[];
        this.size=0;
    }
enqueue(i)
{
   
    if(this.front==-1)
    {
        this.front++;
    }
    this.size++;
    //console.log(this.items,'     ',this.items.length);
    
    this.queue[++this.rear]=i;
    return;
}
dequeue()
{
    if(this.front==-1)
    {
        console.log("Queue is Empty");
        
    }
    this.size--;
    this.queue[this.front++];
    if(this.front>this.rear)
    {
        this.front=this.rear=-1;
    }
return;
}
}
module.exports=
{
    Queue
}