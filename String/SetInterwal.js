console.log("Hii");

let counter = 1;

let id = setInterval(() => {
    counter++;

    if (counter == 3) {
        clearInterval(id);
    }

    console.log("Keshav");
}, 3000);

console.log("Bye");