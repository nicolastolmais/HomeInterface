import React, { Component } from 'react';
import ReminderThin from './Reminders/remindersThin.js';
import Reminders from './Reminders/reminders.js';
import WeatherThin from './Weather/weatherThin.js';
import Weather from './Weather/weather.js';
import './App.css';
import { Grid, GridCell, GridInner } from 'rmwc/Grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      tile: null,
      reminders: null,
      weatherThin: null,
      weatherForcast: null
    }
  }

  switchView = (view = 'thin') => {
    this.setState({ view });
  }

  addNewReminder = (description) => {
    fetch('http://localhost:3001/reminders',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          description: description,
          status: "false"
        })
      })
      .then(response => response.json() && this.getReminders()) // parses response to JSON
      .catch(error => console.error(`Fetch Error =\n`, error));
  }

  getThinWeather = () => {
    fetch('http://localhost:3001/weather')
      .then(response => response.json())
      .then(json => {
        this.setState({ weatherThin: json });
      });
  }

  getWeatherForcast = () => {
    fetch('http://localhost:3001/weatherForcast')
      .then(response => response.json())
      .then(json => {
        this.setState({ weatherForcast: json });
      });
  }

  getReminders = () => {
    fetch('http://localhost:3001/reminders')
      .then(response => response.json())
      .then(json => {
        this.setState({ reminders: json });
      });
  }

  toggleReminderComplete = (description, Created_date) => {
    fetch('http://localhost:3001/reminders',
      {
        method: 'PUT',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          description: description,
          Created_date: Created_date,
          status: "true"
        })
      })
      .then(response => response.json() && this.getReminders()) // parses response to JSON
      .catch(error => console.error(`Fetch Error =\n`, error));
  }

  componentDidMount() {
    this.getReminders();
    this.getThinWeather();
    this.getWeatherForcast();
  }

  render() {
    switch (this.state.view) {
      case 'reminders': {
        return (
          <Reminders
            reminders={this.state.reminders}
            addNewReminder={this.addNewReminder}
            toggleReminderComplete={this.toggleReminderComplete}
            switchView={this.switchView}
          />
        )
      }
      case 'weather': {
        return (
          <Weather
            weatherThin={this.state.weatherThin}
            weatherForcast={this.state.weatherForcast}
            switchView={this.switchView}
          />
        )
      }
      case 'thin':
      default:
        return (
          <Grid>
            <GridCell span="4">
              <ReminderThin
                reminders={this.state.reminders}
                toggleReminderComplete={this.toggleReminderComplete}
                switchView={this.switchView}
              />
            </GridCell>
            <GridCell span="4">
              <WeatherThin
                weatherThin={this.state.weatherThin}
                switchView={this.switchView}
              />
            </GridCell>
          </Grid>
        )
    }
  }
}

export default App;
