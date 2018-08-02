import React, { Component } from 'react';
import { object } from 'prop-types';
import { Grid, GridCell } from 'rmwc/Grid';
import '../styles/Camera.css';

class BaseThin extends Component {
    static propTypes = {
    }

    render() {
        return (
            <Grid>
                <GridCell span="12" role="button" onClick={() => this.props.switchView('base')}>
                    <h1>Base</h1>
                </GridCell>
                <GridCell span="12">
                    Base Thin
                </GridCell>
            </Grid>
        );
    }
}

export default BaseThin;