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
    isThin ? this.setState({ isThin: !this.state.isThin }) : null;
  }

  setTile = (tile) => {
    this.setState({ tile: tile});
  }

  addNewReminder = (description) => {
    fetch('http://localhost:3001/reminders', 
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
        description: description,
        status: "false"
      })
    })
    .then(response => response.json()) // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error));
  }

  componentDidMount() {
    fetch('http://localhost:3001/reminders')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        this.setState({ reminders: json });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.isThin ?
          <ReminderThin
            switchView={this.switchView}
            reminders={this.state.reminders} /> :
          <Reminders
            switchView={this.switchView}
            reminders={this.state.reminders}
            addNewReminder={this.addNewReminder} />
        }
      </div>
    );
  }
}

export default App;
