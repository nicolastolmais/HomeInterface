import React, { Component } from 'react';
import { array } from 'prop-types';
import '../styles/Weather.css';
import moment from 'moment';
import { Grid, GridCell } from '../../../node_modules/rmwc';

class WeatherCard extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        weatherUpcomingDay: array
    }

    getHighTemp(array) {
        let temp = 0;
        for (let i = 0; i < array.length; i++) {
            if (temp < array[i].main.temp) {
                temp = array[i].main.temp
            }
        }
        return this.kelvinToFahrenheit(temp);
    }

    getLowTemp(array) {
        let temp = 1000;
        for (let i = 0; i < array.length; i++) {
            if (temp > array[i].main.temp) {
                temp = array[i].main.temp
            }
        }
        return this.kelvinToFahrenheit(temp);
    }

    kelvinToFahrenheit(kelvin) {
        return Math.round((9 / 5) * (kelvin - 273) + 32);
    }
    render() {
        if (!this.props.weatherUpcomingDay) {
            return null;
        }
        return (
            <Grid className="sideScrollItem">
                <GridCell span="8">
                    <div>
                        {moment(this.props.weatherUpcomingDay.dt_txt).format('YYYY/MM/DD')}
                    </div>
                    <div>
                        {this.getHighTemp(this.props.weatherUpcomingDay)}
                    </div>
                    <div>
                        {this.getLowTemp(this.props.weatherUpcomingDay)}
                    </div>
                </GridCell>
                <GridCell span="4">
                    {this.props.weatherUpcomingDay.map(weatherHour =>
                        <div>
                            <img src={`http://openweathermap.org/img/w/${weatherHour.weather[0].icon}.png`} alt={weatherHour.weather[0].description} />
                        </div>)
                    }

                </GridCell>
            </Grid>
        );
    }
}
export default WeatherCard;