import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import WeatherCard from './WeatherCard.js';
import '../styles/Weather.css';

class WeatherThicc extends Component {
    static propTypes = {
        weatherDay: object,
        weatherWeek: object,
        switchView: func.isRequired
    }

    kelvinToFahrenheit(kelvin) {
        return Math.round((9 / 5) * (kelvin - 273) + 32);
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
                                H / {this.props.weatherDay.main.temp_min}
                            </GridCell>
                            <GridCell span="12">
                                L / {this.props.weatherDay.main.temp_max}
                            </GridCell>
                            <GridCell span="12">
                                clouds {this.props.weatherDay.clouds.all}
                            </GridCell>
                            <GridCell span="12">
                                wind speed: {this.props.weatherDay.wind.speed}
                            </GridCell>
                            <GridCell span="12">
                                wind degree: {this.props.weatherDay.wind.deg}
                            </GridCell>
                        </GridInner>
                    </GridCell>
                    <GridCell span="6">
                        <div>
                            map will go here
                        </div>
                    </GridCell>
                    <GridCell span="12">
                        <div className="sideScrollTable">
                            {this.props.weatherWeek.list.map((forcast, index) =>
                                <WeatherCard
                                    key={index}
                                    weather={forcast}
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