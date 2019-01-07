return new Promise(function(resolve,reject){
    setTimeout(() => resolve(),300);
}).then(console.log("FULFILLED!"));