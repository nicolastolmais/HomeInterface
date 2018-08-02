import React, { Component } from 'react';
import { object, string } from 'prop-types';
import '../styles/Base.css';
import BaseThin from './BaseThin';
import BaseThicc from './BaseThicc';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../../common/styles/ThinTile.css';

class BaseComponent extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        view: string,
    }

    componentWillMount() {
        this.getCameraFeeds()
    }

    getCameraFeeds() {
    }

    render() {
        switch (this.props.view) {
            case 'thin': {
                return (
                    <GridCell className="tile" span="4">
                        <BaseThin
                            switchView={this.props.switchView}
                        />
                    </GridCell>
                )
            }
            case 'camera': {
                return (

                    <GridCell className="tile" span="12">
                        <BaseThicc
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
export default BaseComponent;