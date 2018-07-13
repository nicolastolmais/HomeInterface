import React, { Component } from 'react';
import ReminderThin from './Reminders/remindersThin.js';
import Reminders from './Reminders/reminders.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isThin: false,
      tile: null,
      reminders: null
    }
  }

  switchView = (isThin) => {
    if (isThin) {
      this.setState({ isThin: !this.state.isThin });
    }
  }

  setTile = (tile) => {
    this.setState({ tile: tile });
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
  }

  render() {
    return (
      <div className="App">
        {this.state.isThin ?
          <ReminderThin
            switchView={this.switchView}
            reminders={this.state.reminders}
            toggleReminderComplete={this.toggleReminderComplete} /> :
          <Reminders
            switchView={this.switchView}
            reminders={this.state.reminders}
            addNewReminder={this.addNewReminder}
            toggleReminderComplete={this.toggleReminderComplete} />
        }
      </div>
    );
  }
}

export default App;
