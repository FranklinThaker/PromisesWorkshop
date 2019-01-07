return promise =  new Promise(function(resolve,reject){
    setTimeout(() => reject(new Error("REJECTED!")),300);
}).then(
    result => console.log("Accepted"),
    error => console.log(error.message)
);