var qio = require('q-io/http');

qio.read("http://localhost:7000/")
.then(function (id) {
  return qio.read("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();