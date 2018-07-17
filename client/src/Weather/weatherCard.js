import React, { Component } from 'react';
import { object } from 'prop-types';
import '../Weather/weather.css';

class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateObject : {
                year: "",
                month: "",
                day: "",
                time: "",
                isAM: true
            }
        }
    }
    static propTypes = {
        weather: object
    }

    setDateObject() {
        console.log("stateUpdate")
        this.setState({
            dateObject: {
                year: this.props.weather.dt_txt.slice(0, 4),
                month: this.props.weather.dt_txt.slice(5, 6),
                day: this.props.weather.dt_txt.slice(7, 8),
                time: "",
                isAM: true
            }
        })
    }


    kelvinToFahrenheit(kelvin) {
        return Math.round((9 / 5) * (kelvin - 273) + 32);
    }

    render() {
        if (!this.props.weather) {
            return null;
        }
        
        return (
            <div className="sideScrollItem">
                <div>
                {this.props.weather.dt_txt.slice(0,10)}
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`} alt={this.props.weather.weather[0].description} />
                </div>
                <div>
                    {this.kelvinToFahrenheit(this.props.weather.main.temp)}
                </div>


            </div>
        );
    }
}
export default WeatherCard;