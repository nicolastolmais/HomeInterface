import React, { Component } from 'react';
import { array, func } from 'prop-types'
import ReminderRow from './reminderRow.js';
import './reminders.css';

class remindersThin extends Component {
  static defaultProps = {
    switchView: null
  }
  static propTypes = {
    reminders: array,
    switchView: func.isRequired,
    toggleReminderComplete: func.isRequired
  }

  render() {
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
              Array.isArray(this.props.reminders) && this.props.reminders.filter(reminder => reminder.status === 'false').slice(this.props.reminders.length-5, this.props.reminders.length).map((reminder, index) =>
                <ReminderRow
                  key={reminder + index}
                  reminder={reminder}
                  toggleReminderComplete={this.props.toggleReminderComplete}
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
