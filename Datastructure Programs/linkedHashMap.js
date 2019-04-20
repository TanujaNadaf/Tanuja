var access = require('./LinkedList');
var readlineSync = require('readline-sync');
var fs = require('fs');
// var linkedList = access.LinkedList();
//create a file of numbers and read the file into list
var list = fs.readFileSync('num.txt', 'utf-8', (err, data) => {
    if (err) throw "File not found"
});
//assign the list of numbers into an array
var numArray = list.split(" ");
for(var index=0;index<numArray.length;index++)
{
    var hashtable=hash(numArray[index]);
}
for(var index=0;index<hashtable.length;index++)
{
    console.log(hashtable[index]);
}

function hash(num)
{
    var remainder=num%11;
    var slotArray=new Array(11);
    slotArray[remainder]=new access.LinkedList();
    if(slotArray[remainder]=='undefined')
    {
        slotArray[remainder].add(num);
    }
    else{
        slotArray[remainder].add(num);
    }
return slotArray;
}






















/*//create a new array for slots
var slotArray = new Array(11);
//for each number of numArray apply hashing function

for (var index = 0; index < numArray.length; index++) {
    var n = numArray[index];
    var remainder = n % 11;
    //if the slot array w.r.t index is empty map the linkedlist element
    slotArray[remainder] = new access.LinkedList();
    if (slotArray[remainder] == 'undefined') {
        slotArray[remainder].add(n);
    }
    //if the slot array w.r.t index is not empty do chaining
    else 
        //slotArray[remainder] = new access.LinkedList();
        slotArray[remainder].add(n);
}

//print the HashMap Table
//for (var remainder= 0; remainder< slotArray.length;remainder++) {
    slotArray[remainder].show();
//}
var number = readlineSync.question("Enter the element to be searched in the map");
var remainder = number % 11;
if (slotArray[remainder] == 'undefined') {
    slotArray[remainder] = new LinkedList();
}
if (slotArray[remainder].search(number)) {
    console.log("Number found,remove the number");
    slotArray[remainder].remove(number);
}
else {
    slotArray[remainder].add(number);
}
//get each element from map and write to file
for (var remainder = 0; remainder < slotArray.length; remainder++) {
    var num = slotArray[remainder].getData();
    var finalList = num + " ";
    fs.writeFile('num.txt', finalList);
    console.log("The file is");
    slotArray[index].show();
}*/
