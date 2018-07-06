import React, { Component } from 'react';
import { object } from 'prop-types'
import './reminders.css';

class reminderRow extends Component {
  static propTypes = {
    reminder: object.isRequired
  }

  toggleReminder = () => {
  }

  render() {
    return (
      <tr>
        <td>{this.props.reminder.description}</td>
        <td onClick={this.toggleReminder}>{this.props.reminder.status ? "Complete" : "Not Complete"}</td>
        <td>{this.props.reminder.Created_date}</td>
      </tr>
    );
  }
}

export default reminderRow;
