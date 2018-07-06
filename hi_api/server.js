var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./api/models/remindersModel'), //created model loading here
  bodyParser = require('body-parser');
  
  
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
    reminderModel.create({ id:1, description:"Prepare tea", status:false, creationDate: "Day1"  });
    reminderModel.create({ id:2, description:"Brush teeth", status:false, creationDate: "Day1"  });
    reminderModel.create({ id:3, description:"Toast Bread", status:false, creationDate: "Day1"  });
    reminderModel.create({ id:4, description:"Have breakfast and tea", status:false, creationDate: "Day1" });
  }
});

reminderModel.find({status:false}).exec(function (error, result) {
  // console.log(result);
});

reminderModel.update({id: 2}, {description:"Take bath", status:true, creationDate: "Day1"}, {multi: false}, function (error, result) {
  if(error) {
     //Handle error
  }
  else{
     //Use result
  }
});

reminderModel.remove({id: 4}, function (error, result) {
  if(error) {
    // console.log(error);
  }
  else{
    // console.log(result);
  }
});

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/remindersRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('reminder RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });