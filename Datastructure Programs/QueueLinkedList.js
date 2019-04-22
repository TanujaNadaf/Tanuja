class QNode
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class QueueLinkedList
{
    constructor()
    {
        this.front=null;
        this.rear=null;
        this.size=0;
    }
enqueue(data)
{
    var newNode=new QNode(data);
    if(this.rear==null)
    {
        this.rear=newNode;
        this.size++;
        return;
    }
    else{
        var current=this.rear;
        while(current.next)
        {
            current=current.next;
        }
        this.size++;
        current.next=newNode;
    
    }
return;
}
getSize()
{
    return this.size;
}
peek(position)
{
    var index=0;
    if(position<this.getSize())
    {
        var current=this.rear;
        if(position==0)
        {
            return current.data;
        }
    while(index!=position && current)
    {
        current=current.next;
        index++;
    }
    return current.data;
    }
}
}
module.exports=
{
    QueueLinkedList
}