app.use(session({
  secret: 'supersecretstring12345!',
  saveUninitialized: true,
  resave: true,
  store: new MongoStore({ mongooseConnection: db })
}))

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/src/index.html');
  if(req.session.username == undefined){
    console.log("# Username not set in session yet");
  } else {
    console.log("# Username from session: "+ req.session.username);

  }
});

//Se guarda el usuario
app.post('/username', function(req, res){
  console.log("# Username set to "+ req.body.username);
  req.session.username = req.body.username;
  req.session.save();
  console.log("# Session value set "+ req.session.username);
  res.end();
});

//Se devuelve a la sesion
app.get('/username', function(req,res){
  console.log("# Client Username check "+ req.session.username);
  res.json({username: req.session.username})
});
