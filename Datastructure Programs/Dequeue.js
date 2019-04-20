class Dequeue {
    constructor() {
        this.front = -1;
        this.rear = -1;
        this.size = 0;
        this.queue = [];

    }
    getFront()
    {
        return this.queue[this.front];
    }
    getRear()
    {
      return this.queue[this.rear];
    }
    addRear(char) {
        if (this.rear == -1) {
            this.rear = 0;
            this.front = 0;
        }
        else{
            this.rear++;
        }
        this.queue[this.rear] = char;
        this.size++;
    }

    isPalindrome(string) {
        for (var i = 0; i < string.length; i++) {
            this.addRear(string.charAt(i));
        }
    console.log("front=" +this.front);
    console.log("rare=" +this.rear);
    while(this.front!=this.rear && this.front<this.rear)
    {
        if(this.getFront()!=this.getRear())
        {
            return false;
        }
    this.front++;
    this.rear--;
    }
    return true;
    }
}
module.exports=
{
    Dequeue
}