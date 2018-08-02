'use strict';
module.exports = function (app) {
  var todoList = require('../controllers/remindersController');

  // todoList Routes
  app.route('/reminders')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task)
    .put(todoList.update_a_task);

  app.route('/weather')
    .get(todoList.get_thin_weather);

  app.route('/weatherForcast')
    .get(todoList.get_weather_forcast);

  app.route('/recipe')
    .get(todoList.get_random_recipe);

  app.route('/cameras')
    .get(todoList.get_camera_feeds);

  app.route('/reminders/:taskId')
    .get(todoList.read_a_task)
    .delete(todoList.delete_a_task);
};
