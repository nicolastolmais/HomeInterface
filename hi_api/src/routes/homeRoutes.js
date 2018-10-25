'use strict';
module.exports = function (app) {
    var home = require('../controllers/homeController');

    app.route('/allLights')
        .get(home.get_all_lights);
    app.route('/garage')
        .get(home.get_garage_info);
    app.route('/blind')
        .put(home.update_blind);
};
