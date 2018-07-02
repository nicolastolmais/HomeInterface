import React, { Component } from 'react';
import { object } from 'prop-types'
import './reminders.css';

class reminderRow extends Component {
  static propTypes = {
    reminder: object.isRequired
  }

  submitReminder = () => {
    this.setState({ isAddingReminder: !this.state.isAddingReminder });
    this.addReminder();
}

  render() {
    return (
      <tr>
        <td>{this.props.reminder.description}</td>
        <td>
        {/* <input type="checkbox" onChange="" checked={this.props.reminder.status}/> */}
        </td>
        <td>{this.props.reminder.creationDate}</td>
      </tr>
    );
  }
}

export default reminderRow;
