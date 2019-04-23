class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class StackLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    push(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return;
    }
    
    
    peek(position) {
        var index=0;
        if(position<this.getSize())
        {
        var current=this.head;
        if(position==0)
        {
        return current.data;
        }
        else{
            while(index!=position)
            {
                current=current.next;
                index++;
            }
        return current.data;
        }
    }
}
getSize() {
    return this.size;
}
}
module.exports=
{
    StackLinkedList
}