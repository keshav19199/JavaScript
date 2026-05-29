const prom=new Promise((res,rej)=>{

    setTimeout(()=>{

         let age=55;
    if(age>50)
    {
        res("Age is satisfied..")
    }
    else{
        rej("age is uder")
    }

    },5000);

   

});

prom
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
