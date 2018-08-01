import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import WeatherCard from './WeatherCard.js';
import '../styles/Weather.css';
import moment from 'moment';

class WeatherThicc extends Component {
    static propTypes = {
        weatherDay: object,
        weatherWeek: object,
        switchView: func.isRequired
    }

    kelvinToFahrenheit(kelvin) {
        return Math.round((9 / 5) * (kelvin - 273) + 32);
    }

    splitArray(array) {
        return array.reduce((acc, cur) => {
            const key = moment(cur.dt_txt).format('YYYYMMDD')
            return {
                ...acc,
                [key]: acc[key] ? [...acc[key], cur] : [cur]
            }
        }, {})
    }

    windDirection(degree) {
        switch (true) {
            case (67 <= degree && degree <= 113):
                return "E";
            case (23 < degree && degree < 67):
                return "NE";
            case (327 <= degree && degree <= 360 || 0 <= degree && degree <= 23):
                return "N";
            case (293 < degree && degree < 327):
                return "NW";
            case (247 <= degree && degree <= 293):
                return "W";
            case (203 < degree && degree < 247):
                return "SW";
            case (157 <= degree && degree <= 203):
                return "S";
            case (113 < degree && degree < 157):
                return "SE";
            default:
                null;
        }
    }

    render() {
        return (
            <div>
                <Grid>
                    <GridCell role="button" onClick={() => this.props.switchView('thin')} span="12">
                        <h1>
                            Weather
                        </h1>
                    </GridCell>
                    <GridCell span="3">
                        <GridInner>
                            <GridCell span="12">
                                {this.kelvinToFahrenheit(this.props.weatherDay.main.temp)}
                            </GridCell>
                            <GridCell span="12">
                                <img src={`http://openweathermap.org/img/w/${this.props.weatherDay.weather[0].icon}.png`} alt={this.props.weatherDay.weather[0].description} />
                            </GridCell>
                        </GridInner>
                    </GridCell>
                    <GridCell span="3">
                        <GridInner>
                            <GridCell span="12">
                                pressure: {this.props.weatherDay.main.pressure}
                            </GridCell>
                            <GridCell span="12">
                                humditiy: {this.props.weatherDay.main.humidity}
                            </GridCell>
                            <GridCell span="12">
                                H / {this.kelvinToFahrenheit(this.props.weatherDay.main.temp_min)}
                            </GridCell>
                            <GridCell span="12">
                                L / {this.kelvinToFahrenheit(this.props.weatherDay.main.temp_max)}
                            </GridCell>
                            <GridCell span="12">
                                clouds {this.props.weatherDay.clouds.all} %
                            </GridCell>
                            <GridCell span="12">
                                wind speed: {this.props.weatherDay.wind.speed} m/h
                            </GridCell>
                            <GridCell span="12">
                                wind degree: {this.windDirection(this.props.weatherDay.wind.deg)}
                            </GridCell>
                        </GridInner>
                    </GridCell>
                    <GridCell span="6">
                        <div>
                            Map here
                        </div>
                    </GridCell>
                    <GridCell span="12">
                        <div className="sideScrollTable">
                            {Object.values(this.splitArray(this.props.weatherWeek.list)).map((forcast, index) =>
                                <WeatherCard
                                    key={index}
                                    weatherUpcomingDay={forcast}
                                />
                            )}
                        </div>
                    </GridCell>
                </Grid>
            </div >
        );
    }
}

export default WeatherThicc;