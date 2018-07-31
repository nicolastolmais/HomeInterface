import React, { Component } from 'react';
import { object, string } from 'prop-types';
import TimeThin from './TimeThin.js';
// import TimeThicc from './TimeThicc.js';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../../common/styles/ThinTile.css';

class TimeComponent extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        view: string,
    }

    render() {
        switch (this.props.view) {
            case 'thin': {
                return (
                    <GridCell className="tile" span="4">
                        <TimeThin
                            switchView={this.props.switchView}
                        />
                    </GridCell>
                )
            }
            case 'time': {
                return (
                    <GridCell className="tile" span="12">
                        <TimeThin
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
export default TimeComponent;