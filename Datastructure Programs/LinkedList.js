//creating a new node using constructor
class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}
//initialize the linkedlist with head and size
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(item) {
        //creating the node object
        var newNode = new Node(item);
        //for first element of the list to be inserted to linkedlist
        if (this.head == null) {
            this.head = newNode;
            this.size++;
            return;
        }
        //for the following elements of the list to be inserted to linkedlist
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.size++;
            current.next = newNode;
            }
         return;
        }
    //search the given element in a linkedlist and return true if found
        search(item) {
        if (this.head == null) {
            return false;
        }
        else {
            var current = this.head;
            while (current) {
                if (current.data == item) {
                    return true;
                }
                current = current.next;
            }
            return false;
        }
    }
    //removing the first node of linkedlist if the given element is the first node data
    deletefirst() {
        if (this.head == null) {
            console.log("The linkedlist is empty");
        }
        var n = this.head.data;
        this.head = this.head.next;
        //this.size--;
        return;
    }
    //if the searched element is found then remove
    remove(item) {
        var current = this.head;
        if (current.data == item) {
            this.deletefirst();
            return;
        }
        var prev = current;
        while (current) {
            if (current.data == item) {
                prev.next = current.next;
                //this.size--;
            }
            prev=current;
            current = current.next;
            }
        return;
    }
    //get the elements of the linkedlist into a string form
    getData() {
        var current = this.head;
        var str = " ";
        while (current) {
            var str = str + current.data;
            if (current.next != null) {
                str = str + " ";
            }
            current = current.next;
        }
        return str;
    }
    //insert the element in the sorted manner
    sortedInsert(item)
    {
        var newNode=new Node(item);
        if(this.head==null ||newNode.data<=this.head.data)
        {
            newNode.next=this.head;
            this.head=newNode;
        }
        else
        {
            var current=this.head;
            while(current.next!=null && current.next.data<newNode.data)
            {
                current=current.next;
            }
            newNode.next=current.next;
            current.next=newNode;
        }
       
    return;
    }

    //print the elements of the linkedlist
    show() {
        var current = this.head; 
        var string = " ";
        while (current) {
            string = string + current.data;
            if (current.next != null) {
                string = string + " "; 
            }
            current = current.next;
        }
        console.log(string);
        return;
    }
}
module.exports =
    {
        LinkedList
    }
