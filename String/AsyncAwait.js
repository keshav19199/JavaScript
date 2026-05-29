function Demo()
{
    return Promise.reject("bye")
}

async function handler()
{
    try{
         let r=await Demo();
         console.log(r);
    }
    catch(e){
        console.log(e);
    }
}
handler();
