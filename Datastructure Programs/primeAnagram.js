var readlineSync=require('readline-sync');
var primeArray=[];
var index=0;
for(let i=2;i<1000;i++)
{
    if(isPrime(i))
    {
        primeArray[index]=i;
        //console.log(primeArray[index]);
        index++;
    }
}
//console.log(primeArray.length);
var primeAnagramsArray=primeAnagram(primeArray);
//console.log(primeAnagramsArray);
function primeAnagram(primeArray)
{
    var primeAnagramPair1=[];
    var primeAnagramPair2=[];
    for(let i=0;i<primeArray.length;i++)
    {
        for(let j=i+1;j<primeArray.length;j++)
        {
            //console.log(primeArray[i]);
            if(areAnagrams(primeArray[i].toString(),primeArray[j].toString()))
            {
                primeAnagramPair1.push(primeArray[i]);
                primeAnagramPair2.push(primeArray[j]);
            }
        }
    }
for(let index=0;index<primeAnagramPair1.length+primeAnagramPair2.length;index++)
{
    primeAnagramPair1.push(primeAnagramPair2.shift());
}
//console.log(primeAnagramPair1);
return primeAnagramPair1;
}
function areAnagrams(str1,str2)
{
    console.log(str1);
    //console.log(str2);
    if(str1.length!=str2.length)
    {
      return false;
    }
    var string1Array=str1.split("").sort();
    var string2Array=str2.split("").sort();
    if(string1Array==string2Array)
    {
        return true;
    }
   else
   {
       return false;
   }
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
