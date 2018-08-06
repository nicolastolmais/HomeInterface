import React, { Component } from 'react';
import { func, object } from 'prop-types'
import '../styles/Reminders.css';

class ReminderRowThicc extends Component {
  static propTypes = {
    reminder: object.isRequired,
    toggleReminderComplete: func.isRequired
  }

  toggleReminder = () => {
    if (this.props.reminder.status !== "true") {
      this.props.toggleReminderComplete(this.props.description, this.props.reminder.Created_date)
    }
  }
  render() {
    return (
      <tr>
        <td>{this.props.reminder.description}</td>
        <td onClick={() => this.toggleReminder()}>{this.props.reminder.status !== 'false' ? 'Complete' : 'Not Complete'}</td>
        <td>{this.props.reminder.priority}</td>
        <td>{this.props.reminder.Created_date}</td>
        <td>{this.props.reminder.completedDate}</td>
      </tr>
    );
  }
}

export default ReminderRowThicc;
