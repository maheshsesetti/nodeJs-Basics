

// setInterval(() => {
//     console.log("Hello World");

// }, 2000);

const fs = require('fs');

var names = "Maheshs";


const asyncFuction = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (names == "Mahesh") {
            resolve("Success!")
        } else {
            reject("Failed");
        }

    }, 2000);
});

asyncFuction.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});


const readAndWriteFile = (filePath) => {
    const promiseFile = new Promise((resolve,reject) => {
        setTimeout(() => {
            fs.readFile()
        }, 250);
    })
}



