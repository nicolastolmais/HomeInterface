import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../styles/Camera.css';

class CameraThicc extends Component {
    static propTypes = {
        cameras: array,
        switchView: func.isRequired
    }

    render() {
        return (
            <Grid>
                <GridCell span="12" role="button" onClick={() => this.props.switchView('thin')}>
                    <h1>Cameras</h1>
                </GridCell>
                {
                    Array.isArray(this.props.cameras) && this.props.cameras
                        .map((camera) =>
                            <GridCell span="4">
                                <iframe src={camera} height="350px" width="100%" >
                                    <p>Your browser does not support iframes.</p>
                                </iframe>
                            </GridCell>
                        )
                }
            </Grid>
        );
    }
}

export default CameraThicc;