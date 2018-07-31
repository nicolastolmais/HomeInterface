import React, { Component } from 'react';
import { object, string } from 'prop-types';
import '../styles/Weather.css';
import WeatherThin from './WeatherThin.js';
import WeatherThicc from './WeatherThicc.js';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../../common/styles/ThinTile.css';

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
                        <GridCell className="tile" span="4">
                            <WeatherThin
                                weatherDay={this.props.weatherDay}
                                weatherWeek={this.props.weatherWeek}
                                switchView={this.props.switchView}
                            />
                        </GridCell> : null
                )
            }
            case 'weather': {
                return (
                    this.props.weatherDay && this.props.weatherWeek ?
                        <GridCell className="tile" span="12">
                            <WeatherThicc
                                weatherDay={this.props.weatherDay}
                                weatherWeek={this.props.weatherWeek}
                                switchView={this.props.switchView}
                            />
                        </GridCell> : null
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