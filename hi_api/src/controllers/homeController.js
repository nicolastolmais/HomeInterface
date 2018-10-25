'use strict';

var fetchLightsMock = require('../mocks/lightsMock')
var fetchGarageMock = require('../mocks/garageMock')
var fetchBlindsMock = require('../mocks/blindsMock')

exports.get_all_lights = function (req, res) {
    fetchLightsMock
        // .then((weatherData) => weatherData.json)
        .then((json) => res.send(json))
}

exports.get_garage_info = function (req, res) {
    fetchGarageMock
        // .then((weatherData) => weatherData.json)
        .then((json) => res.send(json))
}

exports.update_blind = function (req, res) {
    fetchBlindsMock
        // .then((weatherData) => weatherData.json)
        .then((json) => res.send(json))
}