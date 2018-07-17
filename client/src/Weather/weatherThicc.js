import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Grid, GridCell } from 'rmwc/Grid';
import WeatherCard from '../Weather/weatherCard.js';
import '../Weather/weather.css';

class WeatherThicc extends Component {
    static propTypes = {
        weatherThin: object,
        weatherForcast: object,
        switchView: func.isRequired
    }

    kelvinToFahrenheit(kelvin) {
        return Math.round((9 / 5) * (kelvin - 273) + 32);
    }

    render() {
        if (!this.props.weatherThin) {
            return null;
        }
        return (
            <div>
                <Grid>
                    <GridCell span="3">
                        <div>
                            {this.kelvinToFahrenheit(this.props.weatherThin.main.temp)}
                            <img src={`http://openweathermap.org/img/w/${this.props.weatherThin.weather[0].icon}.png`} alt={this.props.weatherThin.weather[0].description} />
                        </div>
                    </GridCell>
                    <GridCell span="3">
                        <div>
                            pressure: {this.props.weatherThin.main.pressure}
                            humditiy: {this.props.weatherThin.main.humidity}
                            H / {this.props.weatherThin.main.temp_min}
                            L / {this.props.weatherThin.main.temp_max}
                            clouds {this.props.weatherThin.clouds.all}
                            wind speed: {this.props.weatherThin.wind.speed}
                            wind degree: {this.props.weatherThin.wind.deg}
                        </div>
                    </GridCell>
                    <GridCell span="6">
                        <div>
                            map will go here
                        </div>
                    </GridCell>
                    <GridCell span="12">
                        <div className="sideScrollTable">
                            {this.props.weatherForcast.list.map((forcast, index) =>
                                <WeatherCard
                                    key={index}
                                    weather={forcast}
                                />
                            )}
                        </div>
                    </GridCell>
                    <button type="button" onClick={() => this.props.switchView()}>SwitchView</button>
                </Grid>
            </div>
        );
    }
}

export default WeatherThicc;