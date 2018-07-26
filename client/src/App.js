import React, { Component } from 'react';
import './App.css';
import RemindersContainer from './reminders/RemindersContainer';
import WeatherContainer from './weather/WeatherContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  // addNewReminder = (description) => {
  //   fetch('http://localhost:3001/reminders',
  //     {
  //       method: 'POST',
  //       mode: 'cors',
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //       },
  //       body: JSON.stringify({
  //         description: description,
  //         status: "false"
  //       })
  //     })
  //     .then(response => response.json() && this.getReminders()) // parses response to JSON
  //     .catch(error => console.error(`Fetch Error =\n`, error));
  // }

  // getThinWeather = () => {
  //   fetch('http://localhost:3001/weather')
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({ weatherThin: json });
  //     });
  // }

  // getWeatherForcast = () => {
  //   fetch('http://localhost:3001/weatherForcast')
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({ weatherForcast: json });
  //     });
  // }

  // getReminders = () => {
  //   fetch('http://localhost:3001/reminders')
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({ reminders: json });
  //     });
  // }

  // toggleReminderComplete = (description, Created_date) => {
  //   fetch('http://localhost:3001/reminders',
  //     {
  //       method: 'PUT',
  //       mode: 'cors',
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //       },
  //       body: JSON.stringify({
  //         description: description,
  //         Created_date: Created_date,
  //         status: "true"
  //       })
  //     })
  //     .then(response => response.json() && this.getReminders()) // parses response to JSON
  //     .catch(error => console.error(`Fetch Error =\n`, error));
  // }

  render() {
    return (
      <div>
        <RemindersContainer />
        <WeatherContainer />
      </div>
    )
  }
}

export default App;
