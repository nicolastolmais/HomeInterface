'use strict';

var fetchWeather = require('../mocks/weatherMock')
var fetchWeatherForcast = require('../mocks/weatherForcastMock')

exports.get_thin_weather = function (req, res) {
    fetchWeather
        // .then((weatherData) => weatherData.json)
        .then((json) => res.send(json))
}

exports.get_weather_forcast = function (req, res) {
    fetchWeatherForcast
        // .then((weatherData) => weatherData.json)
        .then((json) => res.send(json))
}