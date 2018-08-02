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
            <div className="cameraTile" role="button" onClick={() => this.props.switchView('camera')}>
                {/* <iframe src={this.props.cameras[this.state.curCamera]} height="400px" width="100%" >
                    <p>Your browser does not support iframes.</p>
                </iframe> */}
                <div className="top-left"> Cameras</div>
            </div>
        );
    }
}

export default CameraThin;