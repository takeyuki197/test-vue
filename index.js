var http = require('http')
var fs = require('fs')

var server = http.createServer()
server.on('request', doRequest);
server.listen(3000, process.env.IP);
console.log('Server running!');
 
// リクエストの処理
function doRequest(req, res) {
    var url = req.url;
    console.log(url);
    if ('/' == url) {
        fs.readFile('./static/index.html', 'UTF-8',
            function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        );
    }else if('/static/test.js' == url){
        fs.readFile('./static/test.js', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data);
            res.end();
        });
    }else if('/static/bundle.js' == url){
        fs.readFile('./static/bundle.js', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data);
            res.end();
        });
    }
}