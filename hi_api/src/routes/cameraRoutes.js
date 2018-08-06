'use strict';
module.exports = function (app) {
    var camera = require('../controllers/cameraController');

    app.route('/cameras')
        .get(camera.get_camera_feeds);
};
