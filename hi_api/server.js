var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  cors = require('cors')
  
  require('./api/models/remindersModel') //created model loading here

  
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/testDb';
mongoose.connect(mongoDB);
var db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once('open', function () {
  console.log("Connection to testDb is open...");
});

var ReminderSchema = mongoose.Schema({
  description: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    required: 'Kindly enter the status of the task'
  }
});
reminderModel = mongoose.model('reminder', ReminderSchema);

reminderModel.find().exec(function (error, results) {
  if (results.length === 0) {
    reminderModel.create({ id:1, description:"Be A Boss", status:"true", creationDate: "Day1"  });
  }
});
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var routes = require('./api/routes/remindersRoutes'); //importing route
routes(app); //register the route

console.log('reminder RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);