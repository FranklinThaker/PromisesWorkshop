let promise = new Promise(function(resolve,reject){
    //resolve();
    reject(new Error("rejected"));
});

promise = Promise.resolve(console.log("Resolved"));
promise.catch(function(err){
    console.error("There is an error");
});

promise = Promise.reject(console.log(error.message));