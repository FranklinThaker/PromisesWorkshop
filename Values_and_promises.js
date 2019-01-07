function attachTitle(args){
   return 'DR. ' + args;
}
Promise.resolve("MANHATTAN").then(attachTitle).then(console.log);