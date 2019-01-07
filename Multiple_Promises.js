
function all(p1,p2){
    return new Promise(function(resolve,reject){
    let counter=0;
    let arr=[];
   
    p1.then(function(data){
        arr[0] = data;
        counter++;    
        if(counter>=2) resolve(arr);
    });

    p2.then(function(data){
        arr[1] = data;
        counter++;    
        if(counter>=2) resolve(arr);
    });
});
}

all(getPromise1(), getPromise2()).then(console.log);

    
