import React, { Component } from 'react';
import { func, array } from 'prop-types'
import ReminderRowThicc from './ReminderRowThicc.js';
import '../styles/Reminders.css';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';

class RemindersThicc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddingReminder: false,
            reminderAdded: false,
            newReminder: ""
        }
    }
    static propTypes = {
        reminders: array,
        switchView: func.isRequired,
        addNewReminder: func.isRequired,
        toggleReminderComplete: func.isRequired
    }

    toggleAddingReminder = () => {
        this.setState({ isAddingReminder: !this.state.isAddingReminder, newReminder: "" });
    }

    handleChange = (event) => {
        this.setState({ newReminder: event.target.value });
    }

    handleSubmit = (event) => {
        this.props.addNewReminder(this.state.newReminder);
        event.preventDefault();
        this.toggleAddingReminder();
    }

    render() {
        const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
        return (
            <Grid>
                <GridCell role="button" onClick={() => this.props.switchView('thin')} span="12">
                    <h1>Reminders</h1>
                </GridCell>
                <GridCell span="12">
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Priority</th>
                                <th>Creation Date</th>
                                <th>Completed Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(this.props.reminders) && this.props.reminders
                                    .sort(function (x, y) { return (x.Created_date === y.Created_date) ? 0 : x.Created_date > y.Created_date ? -1 : 1 })
                                    .sort(function (x, y) { return (x.status === y.status) ? 0 : x.status ? -1 : 1 })
                                    .filter(reminder => Date.now() - Date.parse(reminder.Created_date) < ONE_WEEK)
                                    .map((reminder, index) =>
                                        <ReminderRowThicc
                                            key={reminder + index}
                                            reminder={reminder}
                                            toggleReminderComplete={this.props.toggleReminderComplete}
                                        />)
                            }
                            {this.state.isAddingReminder ?
                                <tr>
                                    <td id="enterDescription" colSpan="2">
                                        <input type="text" value={this.state.newReminder} onChange={this.handleChange} />
                                    </td>
                                    <td>
                                        <button type="button" onClick={this.handleSubmit}>Submit</button>
                                    </td>
                                </tr> :
                                <tr onClick={this.toggleAddingReminder}>
                                    <td id="addReminder" colSpan="5" >Add a reminder</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </GridCell>
            </Grid>
        );
    }
}

export default RemindersThicc;
