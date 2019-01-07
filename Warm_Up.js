return new Promise(function(resolve,reject) {
    setTimeout(() => resolve("done"),300);
}).then(console.log("TIMED OUT!"));