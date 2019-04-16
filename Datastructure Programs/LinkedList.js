//creating a new node using constructor
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
//initialize the linkedlist with head and size
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
        //creating the node object
        var newNode = new Node(data);
        //for first element
        if (this.head == null) {
            this.head = newNode;
            this.size++;
            return;
        }
        //for the following elements
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
    search(word) {
        if (this.head == null) {
            return false;
        }
        else {
            var current = this.head;
            while (current) {
                if (current.data == word) {
                    return true;
                }
                current = current.next;
            }
            return false;
        }
    }
    deletefirst() {
        if (this.head == null) {
            console.log("The linkedlist is empty");
        }
        var n = this.head.data;
        this.head = this.head.next;
        //this.size--;
        return;
    }
    //search the elements and remove
    remove(word) {
        var current = this.head;
        if (current.data == word) {
            this.deletefirst();
            return;
        }
        var prev = current;
        while (current) {
            if (current.data == word) {
                prev.next = current.next;
                //this.size--;
            }
            prev=current;
            current = current.next;
            }
        return;
    }
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
