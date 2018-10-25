import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { Grid, GridCell } from 'rmwc/Grid';
import '../styles/Camera.css';

class CameraThin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curCamera: 0
        }
    }

    static propTypes = {
        cameras: array,
        switchView: func.isRequired
    }

    rotateCamera(camera) {
        return camera === this.props.cameras.length - 1 ? 0 : camera + 1
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                curCamera: this.rotateCamera(this.state.curCamera)
            })
        }, 10000)
    }

    render() {
        return (
            <Grid>
                <GridCell span="12" role="button" onClick={() => this.props.switchView('camera')}>
                    <h1>Cameras</h1>
                </GridCell>
                <GridCell className="cameraTile" span="12">
                    <iframe src={this.props.cameras[this.state.curCamera]}>
                        <p>Your browser does not support iframes.</p>
                    </iframe>
                </GridCell>
            </Grid>
        );
    }
}

export default CameraThin;