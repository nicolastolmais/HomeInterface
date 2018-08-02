import React, { Component } from 'react';
import { array, string } from 'prop-types';
import '../styles/Camera.css';
import CameraThin from './CameraThin';
import CameraThicc from './CameraThicc';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../../common/styles/ThinTile.css';

class CameraComponent extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        cameras: array.isRequired,
        view: string,
    }

    componentWillMount() {
        this.getCameraFeeds()
    }

    getCameraFeeds() {
        fetch('http://localhost:3001/cameras')
            .then(response => response.json())
            .then(json => {
                this.props.setCameras(json.cameras)
            })
    }

    render() {
        switch (this.props.view) {
            case 'thin': {
                return (
                    <GridCell className="tile" span="4">
                        <CameraThin
                            cameras={this.props.cameras}
                            switchView={this.props.switchView}
                        />
                    </GridCell>
                )
            }
            case 'camera': {
                return (

                    <GridCell className="tile" span="12">
                        <CameraThicc
                            cameras={this.props.cameras}
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
export default CameraComponent;