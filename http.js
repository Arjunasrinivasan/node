var http = require('http');
var server = http.createServer(function(req, res) {
    res.end('welcome to the serve')
});
server.listen(8080, function() {
    console.log('server listening')
})