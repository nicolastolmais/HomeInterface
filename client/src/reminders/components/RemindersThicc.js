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
            newReminder: "",
            priority: 1
        }
    }
    static propTypes = {
        reminders: array,
        switchView: func.isRequired,
        addNewReminder: func.isRequired,
        toggleReminderComplete: func.isRequired
    }

    toggleAddingReminder = () => {
        this.setState({ isAddingReminder: !this.state.isAddingReminder, newReminder: "", priority: 1 });
    }

    handleChange = (event) => {
        this.setState({ newReminder: event.target.value });
    }

    handlePriority = (priority) => {
        this.setState({ priority });
    }

    handleSubmit = (event) => {
        if (this.state.newReminder !== "") {
            this.props.addNewReminder(this.state.newReminder, this.state.priority);
        }
        event.preventDefault();
        this.toggleAddingReminder();
    }

    handleQuickSubmit = (reminder) => {
        this.props.addNewReminder(reminder, 1);

    }


    render() {
        const TWO_DAYS = 1000 * 60 * 60 * 24 * 2;
        return (
            <Grid>
                <GridCell role="button" onClick={() => this.props.switchView('thin')} span="12">
                    <h1>Reminders</h1>
                </GridCell>
                <GridCell span="8">
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
                                    .sort(function (x, y) { return (x.priority === y.priority) ? 0 : x.priority > y.priority ? -1 : 1 })
                                    .sort(function (x, y) { return (x.completedDate === y.completedDate) ? 0 : x.completedDate > y.completedDate ? -1 : 1 })
                                    .sort(function (x, y) { return (x.status === y.status) ? 0 : x.status ? 1 : -1 })
                                    .filter(reminder => Date.now() - Date.parse(reminder.completedDate) < TWO_DAYS || reminder.status === 'false')
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
                                    <td id="enterPriority" colSpan="1">
                                        <button className={this.state.priority === 1 ? "prioritySelected" : null} type="button" onClick={() => this.handlePriority(1)}>1</button>
                                        <button className={this.state.priority === 2 ? "prioritySelected" : null} type="button" onClick={() => this.handlePriority(2)}>2</button>
                                        <button className={this.state.priority === 3 ? "prioritySelected" : null} type="button" onClick={() => this.handlePriority(3)}>3</button>
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
                <GridCell span="4">
                    <GridInner>
                        <GridCell span="6">
                            <div className="remindersTile" role="button" onClick={() => this.handleQuickSubmit('Laundry')}>
                                Laundry
                            </div>
                        </GridCell>
                        <GridCell span="6">
                            <div className="remindersTile" role="button" onClick={() => this.handleQuickSubmit('Pay Bills')}>
                                Pay Bills
                            </div>
                        </GridCell>
                        <GridCell span="6">
                            <div className="remindersTile" role="button" onClick={() => this.handleQuickSubmit('Clean House')}>
                                Clean House
                            </div>
                        </GridCell>
                        <GridCell span="6">
                            <div className="remindersTile" role="button" onClick={() => this.handleQuickSubmit('Work on Project')}>
                                Learn
                            </div>
                        </GridCell>
                    </GridInner>
                </GridCell>
            </Grid>
        );
    }
}

export default RemindersThicc;
