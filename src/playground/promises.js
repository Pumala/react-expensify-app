const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is very good news!");
    }, 1500);
});


//  one way using error handling 
// promise.then((data) => {
//     console.log('Success: ', data);
// }).catch((data) => {
//     console.log("Error: ", data);
// });

// another way using error handling
promise.then((data) => {
    console.log('Success 1: ', data);
}, (err) => {
    console.log('Error 1:', err);
});