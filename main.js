var fs = require('fs');

function toArrayBuffer(buffer) {
  var ab = new ArrayBuffer(buffer.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return ab;
}

function toBuffer(ab) {
  var buffer = new Buffer(ab.byteLength);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) {
    buffer[i] = view[i];
  }
  return buffer;
}

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(12345);
app.use(require('express').static(__dirname + '/static'));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  global.socket = socket;
  socket.on('send', function(data){
    data = fs.readFileSync('.gitignore');
    socket.emit('send', toArrayBuffer(data));
  });
  socket.on('receive', function(data){
    console.log("start wrting to file");
    fs.writeFileSync('received_gitignore', data);
  });
});

