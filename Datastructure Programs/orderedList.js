var access=require('./LinkedList');
var readlineSync=require('readline-sync');
var fs=require('fs');
function ordered()
{
var list=fs.readFileSync('numfile.txt','utf-8',(err,data)=>{
    if(err) throw "File not found"
});
var numbers=list.split(" ");
//sorting the array of integer numbers
for(var i=0;i<numbers.length;i++)
{
    for(var j=i+1;j<numbers.length;j++)
    {
        if(numbers[i]>numbers[j])
            {
                var temp=numbers[i];
                numbers[i]=numbers[j];
                numbers[j]=temp;
            }
    }
}
console.log("The sorted array is" + numbers);
//creating a linkedlist object
var orderedlist=new access.LinkedList();
for(var i=0;i<numbers.length;i++)
{
    //adding the elements of the numberlist array to linkedlist   
    orderedlist.add(numbers[i]);
}
//displaying the linkedlist elements
orderedlist.show();
var number=readlineSync.question("Enter the number to be searched in the numberlist");
//if the number is found in the list then remove,if not then add in the sorted manner
if(orderedlist.search(number))
{
    orderedlist.remove(number);
}
else
{
    orderedlist.sortedInsert(number);
}
orderedlist.show();
//get the elements of the linkedlist after adding or removing  in a string form
var string=orderedlist.getData();
//write the complete string back to the file
fs.writeFile('numfile.txt',string);
console.log("The file is");
orderedlist.show();
}
ordered();