var fs = require('fs');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(12345);
app.use(require('express').static(__dirname + '/static'));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('send', function(data){
    socket.emit('sendToPeer', fs.readFileSync('.gitignore'));
  });
  socket.on('receive', function(data){
    fs.writeFileSync('received_gitignore', data);
  });
});

