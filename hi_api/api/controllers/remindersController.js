'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Reminders');

var fetchWeather = require('../mocks/weatherMock')
var fetchWeatherForcast = require('../mocks/weatherForcastMock')

exports.get_thin_weather = function (req, res) {
  fetchWeather
  // .then((weatherData) => weatherData.json)
  .then((json) => res.send(json))
};

exports.get_weather_forcast = function (req, res) {
  fetchWeatherForcast
  // .then((weatherData) => weatherData.json)
  .then((json) => res.send(json))
};


//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//   }).catch((err) => console.log(err));

exports.list_all_tasks = function (req, res) {
  Task.find({}, function (err, task) {
    if (err) { res.send(err); }
    res.send(task);
  });
};

exports.create_a_task = function (req, res) {
  var new_task = new Task(req.body);
  new_task.save(function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};


exports.read_a_task = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function (req, res) {
  Task.findOneAndUpdate({ "Created_date": req.body.Created_date }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function (req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
