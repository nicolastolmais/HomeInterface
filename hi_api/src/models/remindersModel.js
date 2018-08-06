'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReminderSchema = new Schema({
  description: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String
  },
  priority: {
    type: String
  },
  completedDate: {
    type: Date
  },
});

module.exports = mongoose.model('Reminders', ReminderSchema);