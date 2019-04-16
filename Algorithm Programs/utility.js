var readlineSync=require('readline-sync');
module.exports=
{
 anagrams()
{
var str1=readlineSync.question('Enter the 1st string:');
var str2=readlineSync.question('Enter the 2nd string');
var res1=str1.split('');
var res2=str2.split('');
for(var i=0;i<res1.length;i++)                                     
{
    for(var j=i+1;j<res1.length;j++)
    {
        if(res1[i]>res1[j])
        {
            var temp=res1[i]
            res1[i]=res1[j];
            res1[j]=temp;                              //we can do this by taking sort
        }
    }
}
console.log("Array after sorting is:" + res1);
for(var i=0;i<res2.length;i++)
{
    for(var j=i+1;j<res2.length;j++)
    {
        if(res2[i]>res2[j])
        {
            var temp=res2[i];
            res2[i]=res2[j];
            res2[j]=temp;
        }
    }
}
console.log("Array after sorting is:" + res2);
var res3=res1.join(',');                //we can do this by taking the space
var res4=res2.join(',');
if(res3==res4)
{
    console.log("The given 2 strings are Anagrams");
}
else
{
    console.log("The given 2 strings are not Anagrams");
}
},
primenumbers()
{
    console.log('The prime numbers between 0 and 1000 are:')
    for(var i=0;i<1000;i++)
    {
        var k=0;
        for(var j=2;j<i;j++)
        {
            if(i%j==0)
            {
                k=1;
                break;
            }
        }
        if(k==0)
    {
        console.log(i);
    }
}
},
binarySearchinteger()
{
    
    var arr=new Array(5);
    //var arr=[10,18,25,9,11];
    console.log('Enter the array elements');
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=readlineSync.question();
    }
    var sorted=sort(arr);
    function sort(b)
    {
    for(var i=0;i<b.length;i++)
   {
    for(var j=i+1;j<b.length;j++)
    {
        if(b[i]>b[j])
        {
        var temp=b[i];
        b[i]=b[j];
        b[j]=temp;
        }
    }
   }
return b;
}
console.log('Array after sorting is:'+ sorted);
var x=readlineSync.question('Enter the element to be searched in array');
var result=binarySearch(sorted,x);
if(result==-1)
{
    console.log('The element is not found');
}
else
{
    console.log('The element is found at' + result + 'position');
}
function binarySearch(a,x1)
{
var li=0,hi=a.length-1;
var mi=Math.round((li+hi)/2);
while(li<=hi)
{
    if(x1==a[mi])
    {
        return mi;
    }
else if(x1>a[mi])
{
    li=mi+1;
}
else
{
    hi=mi-1;
}
mi=Math.round((li+hi)/2);
}
return -1;
}
},
binarySearchString()
{
var arr=new Array(5);
console.log('Enter the string');
for(var i=0;i<arr.length;i++)
{
    arr[i]=readlineSync.question();
}
var sorted=sort(arr);
function sort(a)
{
    for(var i=0;i<a.length;i++)
    {
        for(var j=i+1;j<a.length;j++)
        {
            if(a[i].localeCompare(a[j])>0)
            {
                var temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
return a;
}
console.log('Array after sorting is:' + sorted);
console.log('Enter the element to be searched');
var x=readlineSync.question();
var result=binarySearch(sorted,x)
if(result==-1)
{
    console.log('The string is not found');
}
else
{
    console.log('The string is found at' +  result + 'position');
}
function binarySearch(b,y)
{
    var li=0,hi=b.length-1;
    var mi=Math.round((li+hi)/2);
    while(li<=hi)
    {
        if(y==b[mi])
        {
            return mi;
        }
    else if(y>b[mi])
    {
        li=mi+1;
    }
    else{
        hi=mi-1;
    }
    mi=Math.round((li+hi)/2);
    }
return -1;
}
},
insertionSortString()
{
var arr=["a","m","e","r","i","c","a"];
for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i].localeCompare(arr[j])>0)
        {
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log('Array after sorting is:' + arr);
},
bubbleSortInteger()
{
    var arr=[25,35,50,100,20,15,200];
    console.log(arr);
    for(var i=0;i<arr.length;i++)
    {
        flag=0;
        for(var j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=1;
            }
        }
    if(flag==0)
    {
        break;
    }
    }
    console.log('The sorted array is:' + arr);
},
bubbleSortString()
{
    var arr=['c','a','l','i','f','o','r','n','i','a'];
    for(var i=0;i<arr.length;i++)
    {
        flag=0;
        for(var j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=1;
            }
        }
    if(flag==0)
    {
        break;
    }
    }
console.log('The sorted array is:' + arr);
},
binarySearchFile()
{
    var fs=require('fs');
    var list=fs.readFileSync('file.txt','utf-8',(err,data)=>{
        if(err) throw "file not found"
    });
     console.log(list);
     //var stringseparators="\r\n";
    //  var words=list.replace("\r\n","").split(" ");
    var words=list.split(" ");

     console.log(words);
    var sorted=sort(words);
    function sort(a)
    {
    for(var i=0;i<a.length;i++)
    {
        for(var j=i+1;j<a.length;j++)
        {
            if(a[i].localeCompare(a[j])>0)
            {
                var temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }    
    return a;
    }
    console.log('Array after sorting is' +"\n" + sorted);
    console.log('Enter the string to be searched in the wordlist');
    var string=readlineSync.question();
    var result=binarySearch(sorted,string)
    if(result==-1)
    {
        console.log('The string is not found');
    }
    else
    {
        console.log('The string is found at' +  result + 'position');
    }
   function binarySearch(b,y)
    {
        var li=0,hi=b.length-1;
        var mi=Math.round((li+hi)/2);
        while(li<=hi)
        {
            if(y==b[mi])
            {
                return mi;
            }
        else if(y>b[mi])
        {
            li=mi+1;
        }
        else{
            hi=mi-1;
        }
        mi=Math.round((li+hi)/2);
        }
    return -1;
    }
},
insertionSortStrings()
{
    var arr=[];
    arr.push("sunday");
    arr.push("monday");
    arr.push("tuesday");
    arr.push("wednesday");
    arr.push("thursday");
    arr.push("friday");
    arr.push("saturday");
    for(var i=0;i<arr.length;i++)
    {
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i].localeCompare(arr[j])>0)
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
console.log("Array after sorting is" + arr);
},
bubbleSortIntegers()
{
    var arr=[];
    arr.push(222);
    arr.push(111);
    arr.push(0);
    arr.push(333);
    arr.push(444);
    for(var i=0;i<arr.length;i++)
    {
        flag=0;
        for(var j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=1;
            }
        }
    if(flag==0)
    {
        break;
    }
    }
console.log('The sorted array is:' + arr);
},
vendingMachine(amount, i, notes) {
    var arr = [1000, 500, 100, 50, 10, 5, 2, 1];

    if (amount == 0 && i == arr.length) {
        console.log("Total number of notes ", notes);
        return;
    }
    if (Math.floor(amount / arr[i]) > 0) {
        console.log(arr[i] + " notes are " + Math.floor(amount / arr[i]));
        notes = notes + Math.floor(amount / arr[i]);
        amount = amount % arr[i];
        this.vendingMachine(amount, i + 1, notes);
        return;
    }
    this.vendingMachine(amount, i + 1, notes);
},
mergeSort(arr)
{
    var n=arr.length;
    if (n === 1) 
    {
        return arr;
    }
    var mid=Math.floor(n/2);
    var left=arr.slice(0,mid);
    var right=arr.slice(mid);
    return this.merge(this.mergeSort(left),this.mergeSort(right));
},
merge(left,right)
{
var result=[];
var i=0;
var j=0;
while(i<left.length && j<right.length)
{
    if(left[i]<right[j])
    {
        result.push(left[i]);
        i++;
    }
else{
    result.push(right[j]);
    j++;
}
}
return result.concat(left.slice(i)).concat(right.slice(j));
},
dayOfWeek()
{
    var day=readlineSync.question("Enter the day");
    var month=readlineSync.question("Enter the month");
    var year=readlineSync.question("Enter the year");
    var y0 = year - Math.floor((14 - month) / 12);
    var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
    m0 = month + (12 * Math.floor((14 - month) / 12)) - 2;
    var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
     console.log(d0);
    var array=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    if(d0<=array.length)
    {
        console.log("The given date falls on",array[d0]);
        
    }

},
tempConversion(choice)
{
if(choice==1)
{
            var tempCelsi = readlineSync.question('enter temp in celsius');
            //conversion from celsius to temperature
            var farenheit = (tempCelsi * (9 / 5) + 32);
            console.log('temperature in fahrenheit' + farenheit);
}
else if(choice==2)
{
    //taking temperature input in fahrenheit
    var tempfaren = readlineSync.question('enter temp in fahrenheit');
    //conversion from temperature to celsius
    var celsius = (tempfaren - 32) * (5 / 9);
    console.log('temperature in celsius' + celsius);
}
},
monthlyPayment(principle,years,rate)
{
        var p = 12 * years;
        var q = rate / (12 * 100);
        var r = Math.pow((1 + rate), (-p))
        //calculate the monthly payments
        var payment = (principle * q) / (1 - r);
        console.log('The monthly payment is: ' + payment);
},
sqrt(num) 
    {
        if (num > 0)
         {
            var t = num;
            //formula 
            var epsilon = 1e-15;
            while (Math.abs(t - num / t) > epsilon * t) 
            {
                t = (num / t + t) / 2;
            }
            console.log("Square root of number is : ", t)
        }
        else 
        {
            console.log("Number should be positive ");
        }
   },
toBinary(num)
   {
       var str=parseInt(5,10).toString(2);
       console.log(str);
       while(str.length<8)
       {
           str="0"+str;
       }
console.log(str);

    },
permutation(string, str, first, last) 
{
    if (first == last) {
      console.log(str);
      string = string + str;
    }
    else {
      for (let index = first; index <= last; index++) {
        //call swapstring method swap the characters 
        str = this.swapString(str, first, index);
        // recursion method 
         this.permutation(string, str, first + 1, last);
        str = this.swapString(str, first, index);
      }
    }
},
  // swap method for swaping the string character
  swapString(str, first, last) 
  {
    var as = '';
    //empty array
    var ch = [];
    //split string into the character
    ch = str.split('');
    // temporary variable
    var temp = ch[first];
    ch[first] = ch[last];
    ch[last] = temp;
    for (let index = 0; index < str.length; index++) {
      as = as + ch[index];
    }
    return as;
  },
  ticTacToe(check, counter, player){
    if (check) {
      if (counter <= 9) {
        if (player == 0) {
          this.showGame();
          player = this.getPlayer();
          this.ticTacToe(check, counter, player);
        }
        else if (player == 1) {
          this.player();
          this.checkWin('x');
          player = 2;
          counter++;
          this.ticTacToe(check, counter, player);
        }
        else if (player == 2) {
          this.computer();
          this.checkWin('0');
          player = 1;
          counter++;
          this.ticTacToe(check, counter, player);
        }
        else {
          console.log(" Draw Match.");
        }
      }
    }
  },

  /**
   * This method is for System
   * Generate position and then mark 0
   */
  computer() 
  {
    var a = Math.random() * 3;
    var b = Math.random() * 3;
    if(arr[x][y]=='_'){
      arr[x][y]='0';
      return;
    }
    computer();
  },

  /**
   * Get player value for which player will play first
   */
   getplayer()
   {
     var noOfPlayer=readline.question('do you want 1 player or 2 player..');
     return noOfPlayer;
   },

   /**
    * This method is for user player to play TicTacToe
    * first user will get position by using mark x
    */
   player()
   {
     this.showGame();
     console.log("which position do you want to mark x" );
     var x=readline.question('');
     var y=readline.question('');

     if(arr[x][y]=='_'){
       arr[x][y]='x';
       return;
     }
     else {
       console.log ('This position have already marked');
       player();
     }
   },

   /**
    * show the ticTacToe game
    */

    showGame(){
      for(var i=0;i<3;i++){
        for(var j=0;j<3;j++) {
          console.log(arr[i][j]+" ");
        }
        console.log();
      }
    },

    /**
     * Check to who won the tic-tac-toe game
     */
    checkWin(c){
      if ((arr[0][0]==c && arr[0][1]==c && arr[0][2]==c)
         || (arr[1][0]==c && arr[1][1]==c && arr[1][2]==c)
         || (arr[2][0]==c && arr[2][1]==c && arr[2][2]==c)
         || (arr[0][0]==c && arr[1][0]==c && arr[2][0]==c)
         || (arr[0][1]==c && arr[1][1]==c && arr[2][1]==c)
         || (arr[0][2]==c && arr[1][2]==c && arr[2][2]==c)
         || (arr[0][0]==c && arr[1][1]==c && arr[2][2]==c)
         || (arr[0][2]==c && arr[1][1]==c && arr[2][0]==c)){

          if(c=='x')
          {
            console.log("Player won");
          } 
          else {
            console.log("System won");
          }
          showGame();
          check=false;
         }

    },
toBinaryNibbles()
{
    var str=parseInt(5,10).toString(2);
    while(str.length<8)
    {
        str="0"+str;
    }
    console.log("The Binary value of given decimal number is" + str);
    var nib1=str.substring(0,4);
    var nib2=str.substring(4,8);
    var result=nib2+nib1;
    console.log("The Swapped binary value is" + result);
    var decimal=this.toDecimal(str);
    console.log("The final back decimal value is"+decimal);
},
toDecimal(str)
{
    var sum=0;
    for(var i=0;i<str.length;i++)
    {
        if(str[str.length-(i+1)]==1)
        {
            sum=sum+Math.pow(2,i);
        }
    }
return sum;
},
}
