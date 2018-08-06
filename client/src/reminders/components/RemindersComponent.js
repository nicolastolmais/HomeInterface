import React, { Component } from 'react';
import { func, array, string } from 'prop-types'
import RemindersThin from './RemindersThin.js';
import RemindersThicc from './RemindersThicc.js';
import '../styles/Reminders.css';
import { Grid, GridCell } from 'rmwc/Grid';
import '../../common/styles/ThinTile.css';

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

    addNewReminder = (description, priority) => {
        fetch('http://localhost:3001/reminders',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({
                    description: description,
                    status: "false",
                    priority: priority
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
                    status: "true",
                    completedDate: Date.now()
                })
            })
            .then(response => response.json() && this.getRemindersData())
            .catch(error => console.error(`Fetch Error =\n`, error))
    }

    render() {
        switch (this.props.view) {
            case 'thin': {
                return (
                    <GridCell className="tile" span="4">
                        <RemindersThin
                            reminders={this.props.reminders}
                            addNewReminder={this.addNewReminder}
                            toggleReminderComplete={this.toggleReminderComplete}
                            switchView={this.props.switchView}
                        />
                    </GridCell>
                )
            }
            case 'reminders': {
                return (
                    <GridCell className="tile" span="12">
                        <RemindersThicc
                            reminders={this.props.reminders}
                            addNewReminder={this.addNewReminder}
                            toggleReminderComplete={this.toggleReminderComplete}
                            switchView={this.props.switchView}
                        />
                    </GridCell>
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
