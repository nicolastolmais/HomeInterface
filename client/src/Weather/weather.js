import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Grid, GridCell, GridInner } from 'rmwc/Grid';
import WeatherCard from '../Weather/weatherCard.js'

class Weather extends Component {
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
                    <GridCell span="6">
                        {this.kelvinToFahrenheit(this.props.weatherThin.main.temp)}
                        <img src={`http://openweathermap.org/img/w/${this.props.weatherThin.weather[0].icon}.png`} alt={this.props.weatherThin.weather[0].description} />
                    </GridCell>
                    <GridCell span="6">
                        ohter info
                    </GridCell>
                    <GridCell span="12">
                        <Grid>
                            {this.props.weatherForcast.list.map((forcast, index) =>
                                <WeatherCard
                                    key={index}
                                    weather={this.kelvinToFahrenheit(forcast.main.temp)}
                                    weatherMain={forcast.weather[0]}
                                />
                            )}
                        </Grid>
                    </GridCell>
                    <button type="button" onClick={() => this.props.switchView()}>SwitchView</button>
                </Grid>
            </div>
        );
    }
}

export default Weather;