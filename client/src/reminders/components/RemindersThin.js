import React, { Component } from 'react';
import { array, func } from 'prop-types'
import { Grid, GridCell } from 'rmwc/Grid';
import ReminderRow from './ReminderRow.js';
import '../styles/Reminders.css';

class RemindersThin extends Component {
  static propTypes = {
    reminders: array,
    addNewReminder: func,
    toggleReminderComplete: func.isRequired,
    switchView: func.isRequired,
  }

  render() {
    const ONE_DAY = 60*60*1000*24;
    return (
      <Grid>
        <GridCell role="button" onClick={() => this.props.switchView('reminders')} span="12">
          <h1>
            Reminders
                        </h1>
        </GridCell>
        <GridCell span="12">
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
                Array.isArray(this.props.reminders) && this.props.reminders
                .slice(this.props.reminders.length - 5, this.props.reminders.length)
                .filter(reminder => reminder.status === 'false')
                
                .map((reminder, index) =>
                  <ReminderRow
                    key={reminder + index}
                    reminder={reminder}
                    toggleReminderComplete={this.props.toggleReminderComplete}
                  />)
              }
            </tbody>
          </table>
        </GridCell>
      </Grid>
    );
  }
}

export default RemindersThin;
