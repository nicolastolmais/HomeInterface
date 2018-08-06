'use strict';
module.exports = function (app) {
  var todoList = require('../controllers/remindersController');

  // todoList Routes
  app.route('/reminders')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task)
    .put(todoList.update_a_task);
};
