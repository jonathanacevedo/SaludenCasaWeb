var PeerServer = require('peer').PeerServer,
    assert = require('assert'),
    events = require('./src/events.js'),
    app = express(),
    port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/src'));

//Prueba de sesiones
mongoose.connect('mongodb://localhost:27017/chat');
var db = mongoose.connection;

mongoose.set('debug', true);

db.on('error', console.error.bind(console, '# Mongo DB: connection error:'));

db.once('open', function (callback) {

  console.log("# Mongo DB:  Connected to server");
  var usersSchema = mongoose.Schema({username: String});
  var User = mongoose.model('User', usersSchema);

  var expressServer = app.listen(port);
  var io = require('socket.io').listen(expressServer);
  var peer = new PeerServer({ port: 9000, path: '/chat' });
  console.log('#### -- Server Running -- ####');
  console.log('# Express:   Listening on port', port);

  peer.on('connection', function (id) {
    io.emit(events.CONNECT, id);
    console.log('# Connected: ', id);
    var user = new User({ username: id });
    user.save(function (err, user) {
      if (err) return console.error(err);
      console.log('# User '+ id + ' saved to database');
    });

  });

  peer.on('disconnect', function (id) {
    io.emit(events.DISCONNECT, id);
    console.log('# Disconnected: ', id);
    User.remove({username: id}, function(err){ if(err) return console.error(err)});

  });

});
