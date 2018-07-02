import React, { Component } from 'react';
import { object, func } from 'prop-types'
import ReminderRow from './reminderRow.js';
import './reminders.css';

class reminders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isThin: false,
            isAddingReminder: false,
            reminderAdded: false
        }
    }
    static propTypes = {
        reminders: object,
        switchView: func.isRequired
    }

    addingReminder = () => {
        this.setState({ isAddingReminder: !this.state.isAddingReminder });
    }

    addReminder = () => {
        this.state.reminderAdded ?
            this.setState({ isAddingReminder: !this.state.isAddingReminder }) :
            null;
    }

    submitReminder = () => {
        this.setState({ isAddingReminder: !this.state.isAddingReminder });
        this.addReminder();
    }

    render() {
        const reminders = [
            {
                id: "1",
                description: "Do Laundry",
                status: true,
                creationDate: "Day1"
            },
            {
                id: "2",
                description: "Go to store",
                status: false,
                creationDate: "Day2"
            },
            {
                id: "3",
                description: "Do Laundry",
                status: false,
                creationDate: "Day1"
            },
            {
                id: "4",
                description: "",
                status: false,
                creationDate: ""
            },
            {
                id: "5",
                description: "",
                status: false,
                creationDate: ""
            },
            {
                id: "6",
                description: "",
                status: false,
                creationDate: ""
            }
        ];
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
                            Array.isArray(reminders) && reminders.map(reminder =>
                                <ReminderRow
                                    key={reminder.id}
                                    reminder={reminder}
                                />)
                        }
                        {this.state.isAddingReminder ?
                            <tr>
                                <td id="enterDescription" colSpan="2">
                                    <input type="text" name="description" onChange={this.addReminder} />
                                </td>
                                <td>
                                    <button type="button" onClick={this.submitReminder}>Submit</button>
                                </td>
                            </tr> :
                            <tr onClick={this.addingReminder}>
                                <td id="addReminder" colSpan="3" >Add a reminder</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <button type="button" onClick={this.props.switchView}>SwitchView</button>
            </div>
        );
    }
}

export default reminders;
