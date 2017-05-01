var http = require('http');
var url = require('url');

var port = process.env.PORT || 8080;
var count = 0;

function basicListener(req, res){
    count++;
    console.log('console: request ' + count + ' received');
    res.writeHead(200, {
        "Content-Type": "text/plan"
    });
    res.write('Hi everybody! Page loaded ' + count + ' times.');
    res.end();
    if (url.parse(req.url).path.startsWith('/stop')) {
        console.log("Request to: " + req.url);
        stop();
    }    
}

function stop(){
    console.log("Gracefully shutting down...");
    process.exit();
}

var httpServer = http.createServer(basicListener);
httpServer.listen(port);
