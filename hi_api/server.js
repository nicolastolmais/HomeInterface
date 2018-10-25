var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  cors = require('cors')
  require('./src/models/remindersModel') //created model loading here
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/testDb';
mongoose.connect(mongoDB);
var db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once('open', function () {
  console.log("Connection to testDb is open...");
});

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importing routes
var remindersRoutes = require('./src/routes/remindersRoutes'); 
remindersRoutes(app); 
var weatherRoutes = require('./src/routes/weatherRoutes'); 
weatherRoutes(app); 
var cameraRoutes = require('./src/routes/cameraRoutes'); 
cameraRoutes(app); 
var recipeRoutes = require('./src/routes/recipeRoutes');
recipeRoutes(app);
var homeRoutes = require('./src/routes/homeRoutes');
homeRoutes(app); 

console.log('reminder RESTful API server started on: ' + port);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);