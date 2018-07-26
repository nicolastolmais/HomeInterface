import React, { Component } from 'react';
import { object, func, string } from 'prop-types';
import '../styles/Weather.css';
import WeatherThin from './WeatherThin.js';
import WeatherThicc from './WeatherThicc.js';

class WeatherComponent extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        view: string,
        weatherDay: object,
        weatherWeek: object,
    }

    componentWillMount() {
        this.getCurrentWeatherData()
    }

    getCurrentWeatherData() {
        fetch('http://localhost:3001/weather')
            .then(response => response.json())
            .then(json => {
                this.props.setWeatherDay(json)
            })
        fetch('http://localhost:3001/weatherForcast')
            .then(response => response.json())
            .then(json => {
                this.props.setWeatherWeek(json)
            })
    }

    render() {
        switch (this.props.view) {
            case 'thin': {
                return (
                    this.props.weatherDay ?
                        <WeatherThin
                            weatherDay={this.props.weatherDay}
                            weatherWeek={this.props.weatherWeek}
                            switchView={this.props.switchView}
                        /> : null
                )
            }
            case 'weather': {
                return (
                    this.props.weatherDay && this.props.weatherWeek ?
                        <WeatherThicc
                            weatherDay={this.props.weatherDay}
                            weatherWeek={this.props.weatherWeek}
                            switchView={this.props.switchView}
                        />
                        : null
                )
            }
            default:
                return (
                    null
                )
        }
    }
}
export default WeatherComponent;