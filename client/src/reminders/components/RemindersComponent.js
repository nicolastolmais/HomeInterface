import React, { Component } from 'react';
import { func, array, string } from 'prop-types'
import RemindersThin from './RemindersThin.js';
import RemindersThicc from './RemindersThicc.js';
import '../styles/Reminders.css';

class RemindersComponent extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        view: string,
        reminders: array,
        switchView: func,
    }

    componentWillMount() {
        this.getRemindersData()
    }

    getRemindersData() {
        fetch('http://localhost:3001/reminders')
            .then(response => response.json())
            .then(json => {
                this.props.setReminders(json)
            })
    }

    addNewReminder = (description) => {
        fetch('http://localhost:3001/reminders',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({
                    description: description,
                    status: "false"
                })
            })
            .then(response => response.json() && this.getRemindersData())
            .catch(error => console.error(`Fetch Error =\n`, error))
    }

    toggleReminderComplete = (description, Created_date) => {
        fetch('http://localhost:3001/reminders',
            {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({
                    description: description,
                    Created_date: Created_date,
                    status: "true"
                })
            })
            .then(response => response.json() && this.getRemindersData())
            .catch(error => console.error(`Fetch Error =\n`, error))
    }

    render() {
        switch (this.props.view) {
            case 'thin': {
                return (
                    <RemindersThin
                        reminders={this.props.reminders}
                        addNewReminder={this.addNewReminder}
                        toggleReminderComplete={this.toggleReminderComplete}
                        switchView={this.props.switchView}
                    />
                )
            }
            case 'reminders': {
                return (
                    <RemindersThicc
                        reminders={this.props.reminders}
                        addNewReminder={this.addNewReminder}
                        toggleReminderComplete={this.toggleReminderComplete}
                        switchView={this.props.switchView}
                    />
                )
            }
            default:
                return (
                    null
                )
        }
    }
}

export default RemindersComponent
