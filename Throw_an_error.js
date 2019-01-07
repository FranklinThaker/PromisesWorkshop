
file = process.argv[2];

function parsePromised(json){
    try{
        return promise = new Promise(function(resolve,reject){
            resolve(JSON.parse(json));
        })
    }
    catch(e){
        reject(e);
    }
}
parsePromised(file).then(null,e=>console.log(e.message));