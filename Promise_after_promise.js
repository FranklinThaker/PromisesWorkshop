let secondprom = first().then(function(val){
    return second(val);
});
secondprom.then(console.log);
