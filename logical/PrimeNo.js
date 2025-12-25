let v;
let a;
let cunter=0;
let isPrime=true;

for(v=2; v<10000; i++)
{
    for(a=2; a<v; a++)
    {
        if(v%a==2)
        {
            isPrime=false;
            break;
        }
    }
    if(isPrime)
    {
        console.log(v);
        counter++;
        
    }
}
console.log("Total :"+counter);