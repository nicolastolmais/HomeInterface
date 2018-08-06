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
    const ONE_DAY = 1000 * 60 * 60 * 24;
    return (
      <Grid>
        <GridCell role="button" onClick={() => this.props.switchView('reminders')} span="12">
          <h1>Reminders</h1>
        </GridCell>
        <GridCell span="12">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(this.props.reminders) && this.props.reminders
                  .sort(function (x, y) { return (x.completedDate === y.completedDate) ? 0 : x.completedDate > y.completedDate ? -1 : 1 })
                  .sort(function (x, y) { return (x.status === y.status) ? 0 : x.status ? -1 : 1 })
                  .filter(reminder => reminder.status === 'false' || Date.now() - Date.parse(reminder.Created_date) < ONE_DAY)
                  .map((reminder, index) =>
                    index < 5 ?
                      <ReminderRow
                        key={reminder + index}
                        reminder={reminder}
                        toggleReminderComplete={this.props.toggleReminderComplete}
                      /> : null)
              }
            </tbody>
          </table>
        </GridCell>
      </Grid>
    );
  }
}

export default RemindersThin;
