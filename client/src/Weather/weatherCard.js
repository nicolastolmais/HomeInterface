import React, { Component } from 'react';
import { object, number } from 'prop-types';
import { Grid, GridCell, GridInner } from 'rmwc/Grid';

class WeatherCard extends Component {
    static propTypes = {
        weather: number,
        weatherMain: object
    }

    kelvinToFahrenheit(kelvin) {
        return Math.round((9 / 5) * (kelvin - 273) + 32);
    }

    render() {
        if (!this.props.weather || !this.props.weatherMain) {
            return null;
        }
        return (
            <React.Fragment>
                <GridCell span="1">
                    <img src={`http://openweathermap.org/img/w/${this.props.weatherMain.icon}.png`} alt={this.props.weatherMain.description} />
                </GridCell>
                <GridCell span="1">
                    {this.props.weather}
                </GridCell>
            </React.Fragment>
        );
    }
}
export default WeatherCard;