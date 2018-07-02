'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReminderSchema = new Schema({
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

module.exports = mongoose.model('Reminders', ReminderSchema);