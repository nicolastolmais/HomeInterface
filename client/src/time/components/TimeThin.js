import React, { Component } from 'react';
import { object } from 'prop-types';
import { Grid, GridCell } from 'rmwc/Grid';
import '../styles/Time.css';

class TimeThin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: ""
        }
    }

    componentWillMount() {
        this.setState({
            curTime: new Date().toString()
        })
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: new Date().toString()
            })
        }, 1000)
    }

    getDay(abv) {
        switch (abv) {
            case 'Mon':
                return 'Monday'
            case 'Tue':
                return 'Tuesday'
            case 'Wed':
                return 'Wednesday'
            case 'Thu':
                return 'Thursday'
            case 'Fri':
                return 'Friday'
            case 'Sat':
                return 'Saturday'
            case 'Sun':
                return 'Sunday'
            default:
                return null
        }
    }

    getStandardTime(time) {
        if(time.slice(0,2) > 12) {
            return (-12 + + time.slice(0,2)) + time.slice(2,9) + " PM"
        } 
        return time + " AM"
    }

    render() {
        return (
            <Grid>
                <GridCell span="12" role="button" onClick={() => this.props.switchView('thin')}>
                    <h1>Time</h1>
                </GridCell>
                <GridCell className="timeInfo" span="12">
                    <h2>{this.getStandardTime(this.state.curTime.slice(16, 24))}</h2>
                </GridCell>
                <GridCell className="timeInfo" span="12">
                    <h2>{this.state.curTime.slice(4, 15)}</h2>
                </GridCell>
                <GridCell className="timeInfo" span="12">
                    <h2>{this.getDay(this.state.curTime.slice(0, 3))}</h2>
                </GridCell>
            </Grid>
        );
    }
}

export default TimeThin;