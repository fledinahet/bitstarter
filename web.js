var express = require('express');

var fs = require('fs');

buf = new Buffer(256);
len = buf.write(fs.readFileSync('index.html','utf8'));

texte = buf.toString('utf8', 0, len);
console.log(texte);


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(texte);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
