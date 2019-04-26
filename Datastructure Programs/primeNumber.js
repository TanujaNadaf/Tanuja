var readlineSync=require('readline-sync');
var primeMatrix=set2DMatrix();
console.log("The 2DMatrix to print the prime numbers between 0-1000 is:");
for(let index=0;index<primeMatrix.length;index++)
{
    var string=""
    for(let j=0;j<primeMatrix[index].length;j++)
    {
        if(!isNaN(primeMatrix[index][j]))
        {
        string=string+primeMatrix[index][j]+" ";
        }
    }
console.log(string);
}
function set2DMatrix()
{
    var prime2DArray=[[],[]]
    var prime2DArray=set2DArray(10,25);
    //console.log(prime2DArray);
    var first=0;second=0;third=0;fourth=0,fifth=0;sixth=0;seventh=0;eigth=0;ningth=0,tength=0;
    for(let index=2;index<1000;index++)
    {
        if(isPrime(index))
        {
           if(index>0 && index<100)
           {
               prime2DArray[0][first]=index;
               //console.log(prime2DArray);
               first++;
           }
           if(index>100 && index<200)
           {
               prime2DArray[1][second]=index;
               second++;
           }
           if(index>200 && index<300)
           {
               prime2DArray[2][third]=index;
               third++;
           }
           if(index>300 && index<400)
           {
               prime2DArray[3][fourth]=index;
               fourth++;
           }
           if(index>400 && index<500)
           {
               prime2DArray[4][fifth]=index;
               fifth++;
           }
           if(index>500 && index<600)
           {
               prime2DArray[5][sixth]=index;
               sixth++;
           }
           if(index>600 && index<700)
           {
               prime2DArray[6][seventh]=index;
               seventh++;
           }
           if(index>700 && index<800)
           {
               prime2DArray[7][eigth]=index;
               eigth++;
           }
           if(index>800 && index<900)
           {
               prime2DArray[8][ningth]=index;
               ningth++;
           }
           if(index>900 && index<1000)
           {
               prime2DArray[9][tength]=index;
               tength++;
           }
        
        }
    }
    return prime2DArray;
}
function set2DArray(rows,columns)
{
    var array=new Array(rows);
    for(let index=0;index<rows;index++)
    {
        array[index]=new Array(columns);
    }
return array;
}
function isPrime(index)
{
    var k=0;
    for(let j=2;j<index;j++)
    {
        if((index%j)==0)
        {
            k=1;
            break;
        }
    }
if(k==0)
{
    return true;
}
}