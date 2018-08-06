import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../styles/Home.css';

class HomeThicc extends Component {
    static propTypes = {
        switchView: func.isRequired
    }

    render() {
        return (
            <Grid>
                <GridCell span="12">
                    <GridInner>
                        <GridCell span="12" role="button" onClick={() => this.props.switchView('thin')}>
                            <h1>Home</h1>
                        </GridCell>
                    </GridInner>
                </GridCell>
                <GridCell span="4">
                    <GridInner>
                        <GridCell span="12">
                            <select className="dropdown">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.props.switchView('thin')}>
                                Nest
                    </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.props.switchView('thin')}>
                                ?
                    </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.props.switchView('thin')}>
                                ?
                    </div>
                        </GridCell>
                    </GridInner>
                </GridCell>
                <GridCell span="2">
                    <GridInner>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.props.switchView('thin')}>
                                Lights
                    </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.props.switchView('thin')}>
                                Blinds
                    </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.props.switchView('thin')}>
                                Locks
                    </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.props.switchView('thin')}>
                                Garage
                    </div>
                        </GridCell>
                    </GridInner>
                </GridCell>
                <GridCell span="6">
                    <GridInner>
                        <GridCell span="4">
                            <div className="homeTile" role="button" onClick={() => this.props.switchView('thin')}>
                                LIght 1
                    </div>
                        </GridCell>
                    </GridInner>
                </GridCell>
            </Grid>
        )
    }
}

export default HomeThicc;