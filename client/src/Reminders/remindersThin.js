import React, { Component } from 'react';
import { object, func } from 'prop-types'
import ReminderRow from './reminderRow.js';
import './reminders.css';

class remindersThin extends Component {
  static defaultProps = {
    switchView: null
  }
  static propTypes = {
    reminders: object,
    switchView: func.isRequired
  }

  render() {
    // const reminders = [
    //   {
    //     id: "1",
    //     description: "Do Laundry",
    //     status: "Not Complete",
    //     creationDate: "Day1"
    //   },
    //   {
    //     id: "2",
    //     description: "Go to store",
    //     status: "Complete",
    //     creationDate: "Day2"
    //   },
    //   {
    //     id: "3",
    //     description: "Do Laundry",
    //     status: "Not Complete",
    //     creationDate: "Day1"
    //   },
    //   {
    //     id: "4",
    //     description: "",
    //     status: "",
    //     creationDate: ""
    //   },
    //   {
    //     id: "5",
    //     description: "",
    //     status: "",
    //     creationDate: ""
    //   },
    //   {
    //     id: "6",
    //     description: "",
    //     status: "",
    //     creationDate: ""
    //   }
    // ];
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Status</th>
              <th>Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.isArray(this.props.reminders) && this.props.reminders.slice(0, 5).map(reminder =>
                <ReminderRow
                  key={reminder.id}
                  reminder={reminder}
                />)
            }
          </tbody>
        </table>
        <button type="button" onClick={this.props.switchView}>SwitchView</button>
      </div>
    );
  }
}

export default remindersThin;
