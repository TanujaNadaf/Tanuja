var readlineSync=require('readline-sync');
module.exports={
binarySearchTree()
{
var testCases=readlineSync.question("Enter the number of test cases" + " ");
//var array=[1,2,3,4,5];
//console.log("The array with integers which refers to number of nodes is:",array);
var array=readlineSync.question("Enter the array elements");
console.log("Array is"+ array);
console.log(array.length);

for(let index=0;index<=testCases;index++)
{
     array[index]=readlineSync.question();
}
var first,second;
for(var index=0;index<array.length;index++)
{
    first=this.factorial(2*array[index]);
    second=this.factorial(array[index]+1)*this.factorial(array[index]);
    var result=Math.floor(first/second);
    console.log("Test Case" + " " + array[index] +":"+"Total Number of nodes required for" + " " + array[index] + " "+ "node"+ " "+"is" + " "+ result);
}
},
factorial(integer)
{
    if(integer==0||integer==1)
    {
        return 1;
    }
return integer*this.factorial(integer-1);
}
}
