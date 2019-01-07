let promise = new Promise(function(resolve,reject){
    resolve();
    reject(new Error("I DID NOT FIRE"));
}).then(
    result => console.log("I FIRED"),
    error => console.log(error.message)
);