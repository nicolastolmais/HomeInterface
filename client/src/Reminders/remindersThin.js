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
