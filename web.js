var express = require('express');

var fs = require('fs');

buf = new Buffer(256);

fs.readFileSync('/index.html', function (err, data) {
  if (err) throw err;
  buf.write(data);
  len = buf.toString();
});



var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(len);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
