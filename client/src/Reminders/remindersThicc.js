import React, { Component } from 'react';
import { func, array } from 'prop-types'
import ReminderRow from './reminderRow.js';
import './reminders.css';

class RemindersThicc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isThin: false,
            isAddingReminder: false,
            reminderAdded: false,
            newReminder: null
        }
    }
    static propTypes = {
        reminders: array,
        switchView: func.isRequired,
        addNewReminder: func.isRequired,
        toggleReminderComplete: func.isRequired
    }

    toggleAddingReminder = () => {
        this.setState({ isAddingReminder: !this.state.isAddingReminder, newReminder: null });
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
                            Array.isArray(this.props.reminders) && this.props.reminders.map((reminder, index) =>
                                <ReminderRow
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
                                <td id="addReminder" colSpan="3" >Add a reminder</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <button type="button" onClick={() => this.props.switchView()}>SwitchView</button>
            </div>
        );
    }
}

export default RemindersThicc;
