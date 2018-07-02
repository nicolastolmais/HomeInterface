import React, { Component } from 'react';
import ReminderThin from './Reminders/remindersThin.js';
import Reminders from './Reminders/reminders.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isThin: false,
      reminders: null
    }
  }

  switchView = () => {
    this.setState({ isThin: !this.state.isThin });
  }

  componentDidMount() {
    fetch('http://localhost:3001/reminders')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ reminders: json });
      });

    // fetch('https://mywebsite.com/endpoint/', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   }),
    // });
  }

  render() {
    return (
      <div className="App">
        {this.state.isThin ?
          <ReminderThin
            switchView={this.switchView}
            reminders={this.state.reminders} /> :
          <Reminders
            switchView={this.switchView} />
        }
      </div>
    );
  }
}

export default App;
