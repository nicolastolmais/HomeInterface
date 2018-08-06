'use strict';

var fetchCameraFeeds = require('../mocks/cameraMock')

exports.get_camera_feeds = function (req, res) {
    fetchCameraFeeds
        // .then((weatherData) => weatherData.json)
        .then((json) => res.send(json))
}

exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err) { res.send(err); }
        res.send(task);
    });
};
