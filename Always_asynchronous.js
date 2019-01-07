let promise = new Promise(function(resolve,reject){
    resolve();
}).then(
    result => console.log("PROMISE VALUE"),
    error => console.log(error.message)
);
console.log("MAIN PROGRAM");