var http = require('http');
var fs = require('fs');
var path = require('path');
var dir = 'C:\\Users\\sacha\\OneDrive\\Desktop\\pancakeswap-clone';
http.createServer(function(q, r) {
  var file = path.join(dir, 'index.html');
  fs.readFile(file, function(e, d) {
    r.writeHead(200, {'Content-Type': 'text/html'});
    r.end(d);
  });
}).listen(8080, function() {
  console.log('Server running at http://localhost:8080');
});
