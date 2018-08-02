import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../styles/Base.css';

class BaseThicc extends Component {
    static propTypes = {
        switchView: func.isRequired
    }

    render() {
        return (
            <Grid>
            <GridCell span="12" role="button" onClick={() => this.props.switchView('thin')}>
                <h1>Base</h1>
            </GridCell>
            <GridCell span="12">
            Base Thicc
            </GridCell>
        </Grid>
        );
    }
}

export default BaseThicc;