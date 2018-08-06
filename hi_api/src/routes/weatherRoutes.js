'use strict';
module.exports = function (app) {
    var weather = require('../controllers/weatherController');

    app.route('/weather')
        .get(weather.get_thin_weather);

    app.route('/weatherForcast')
        .get(weather.get_weather_forcast);
}
