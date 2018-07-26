import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Grid, GridCell } from 'rmwc/Grid';
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
                    <GridCell span="3">
                        <div>
                            {this.kelvinToFahrenheit(this.props.weatherDay.main.temp)}
                            <img src={`http://openweathermap.org/img/w/${this.props.weatherDay.weather[0].icon}.png`} alt={this.props.weatherDay.weather[0].description} />
                        </div>
                    </GridCell>
                    <GridCell span="3">
                        <div>
                            pressure: {this.props.weatherDay.main.pressure}
                            humditiy: {this.props.weatherDay.main.humidity}
                            H / {this.props.weatherDay.main.temp_min}
                            L / {this.props.weatherDay.main.temp_max}
                            clouds {this.props.weatherDay.clouds.all}
                            wind speed: {this.props.weatherDay.wind.speed}
                            wind degree: {this.props.weatherDay.wind.deg}
                        </div>
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
                    <button type="button" onClick={() => this.props.switchView("thin")}>SwitchView</button>
                </Grid>
            </div>
        );
    }
}

export default WeatherThicc;