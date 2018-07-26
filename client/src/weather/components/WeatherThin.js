import React, { Component } from 'react';
import { object } from 'prop-types';
import { Grid, GridCell } from 'rmwc/Grid';

class WeatherThin extends Component {
    static propTypes = {
        weatherDay: object
    }

    kelvinToFahrenheit(kelvin) {
        return Math.round((9 / 5) * (kelvin - 273) + 32);
    }

    render() {
        if (!this.props.weatherDay) {
            return null;
        }
        return (
            <Grid>
                <GridCell span="12" role="button" onClick={() => this.props.switchView('weather')}>
                    WEATHER
                </GridCell>
                <GridCell span="12">
                    {this.kelvinToFahrenheit(this.props.weatherDay.main.temp)}
                </GridCell>
                <GridCell span="12">
                    <img src={`http://openweathermap.org/img/w/${this.props.weatherDay.weather[0].icon}.png`} alt="weather icon" />
                </GridCell>
            </Grid>
        );
    }
}

export default WeatherThin;