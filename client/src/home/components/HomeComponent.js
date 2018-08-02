import React, { Component } from 'react';
import { object, string } from 'prop-types';
import '../styles/Home.css';
import HomeThin from './HomeThin';
import HomeThicc from './HomeThicc';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../../common/styles/ThinTile.css';

class HomeComponent extends Component {
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
                        <HomeThin
                            switchView={this.props.switchView}
                        />
                    </GridCell>
                )
            }
            case 'home': {
                return (
                    <GridCell className="tile" span="12">
                        <HomeThicc
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
export default HomeComponent;