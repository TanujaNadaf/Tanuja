var prime=primenumbers();
function primenumbers()
{
    console.log('The prime numbers between 0 and 1000 are:')
    var count=0;
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
        count++;
    }
}
console.log(count);
}
