class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class StackLinkedList
{
    constructor()
    {
        this.top=null;
        this.size=0;
    }
push(data)
{
    var newNode=new Node(data);
    if(this.top==null)
    {
        this.top=newNode;
        this.size++;
        return;
    }
    else{
        var current=this.top;
        while(current.next)
        {
            current=current.next;
        }
    this.size++;
    newNode.next=current;
    this.top=newNode;
    }

}
getSize()
{
    return this.size;
}








}
