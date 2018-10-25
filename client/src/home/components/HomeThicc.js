import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../styles/Home.css';
import Thermostat from 'react-nest-thermostat';

class HomeThicc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchGroup: '',
            blinds: [
                123,
                456,
                1,
                2,
                3,
                4,
                5,
                6,
            ]
        }
    }

    static propTypes = {
        switchView: func.isRequired
    }

    setSwitchGroup(switchGroup) {
        this.setState({ switchGroup })
    }

    updateAmbientThermostat(ambientTemperature) {
        this.props.setThermostatAmbientTemperature(Number(ambientTemperature))
    }

    updateTargetThermostat(targetThermostat) {
        this.props.setThermostatTargetTemperature(Number(targetThermostat))
    }

    updateLeaf(leaf) {
        this.props.setThermostatLeaf(leaf === 'yes' ? true : false)
    }

    updateHvac(hvac) {
        this.props.setThermostatHvac(hvac)
    }

    updateAway(away) {
        this.props.setThermostatAway(away === 'yes' ? true : false )
    }

    renderSwitchGroup() {
        switch (this.state.switchGroup) {
            case 'lights':
                return this.getArrayOfLights().map((light) =>
                    <GridCell span="4">
                        <div className="homeTile">
                            {light.name}
                            {light.state.on ? ' on' : ' off'}
                        </div>
                    </GridCell>)
            case 'garage':
                return <GridCell span="4">
                    <div className="homeTile" role="button" onClick={() => this.props.switchView('thin')}>
                        {this.props.garage.typeName}
                        {this.props.garage.doorState === 1 ? ' open' : ' closed'}
                    </div>
                </GridCell>
            case 'blinds':
                return this.state.blinds.map((blind) =>
                    <GridCell span="4">
                        <div className="homeTile">
                            <div>
                                Hardcoded Blind {blind}
                            </div>
                            <div role="button" onClick={() => this.props.moveBlinds(blind, 'up')}>
                                Up
                            </div>
                            <div role="button" onClick={() => this.props.moveBlinds(blind, 'down')}>
                                Down
                            </div>
                        </div>
                    </GridCell>)
            case 'scene':
                return this.props.scenes.map((scene) =>
                    <GridCell span="12">
                        <div className="sceneTile" onClick={() => this.props.setScene(scene.name)}>
                            {scene.name}
                        </div>
                    </GridCell>)
            case 'thermostat':
                return <GridCell span="12">
                    <div className="sceneTile">
                        <Thermostat
                            height={'400px'}
                            width={'400px'}
                            numTicks={this.props.thermostat.numTicks}
                            minValue={this.props.thermostat.minValue}
                            maxValue={this.props.thermostat.maxValue}
                            away={this.props.thermostat.away}
                            leaf={this.props.thermostat.leaf}
                            ambientTemperature={this.props.thermostat.ambientTemperature}
                            targetTemperature={this.props.thermostat.targetTemperature}
                            hvacMode={this.props.thermostat.hvac}
                        />
                        <div>
                            ambientTemperature: <input type="range" value={this.props.thermostat.ambientTemperature} id="ambientTemperature" name="ambientTemperature" min="40" max="100" onChange={(event) => this.updateAmbientThermostat(event.target.value)}/>
                        </div>
                        <div>
                            targetTemperature: <input type="range" value={this.props.thermostat.targetTemperature} id="targetTemperature" name="targetTemperature" min="40" max="100" onChange={(event) => this.updateTargetThermostat(event.target.value)}/>
                        </div>
                        <div> 
                            hvacMode: <select name="hvacMode" value={this.props.thermostat.hvac} onChange={(event) => this.updateHvac(event.target.value)}>
                                <option value="off">off</option>
                                <option value="heating">heating</option>
                                <option value="cooling">cooling</option>
                            </select>
                        </div>
                        <div>
                            leaf: <select name="leaf" value={this.props.thermostat.leaf ? "yes" : "no"} onChange={(event) => this.updateLeaf(event.target.value)}>
                                <option value="no">no</option>
                                <option value="yes">yes</option>
                            </select>
                        </div>
                        <div>
                            away: <select name="away" value={this.props.thermostat.away ? "yes" : "no"} onChange={(event) => this.updateAway(event.target.value)}>
                                <option value="no">no</option>
                                <option value="yes">yes</option>
                            </select>
                        </div>
                    </div>
                </GridCell>
            default: null
        }
    }

    getArrayOfLights() {
        return this.props.lights ? Object.values(this.props.lights) : null
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
                            <div className="homeTile" role="button" onClick={() => this.setSwitchGroup('scene')}>
                                Scene
                                <div>
                                    {this.props.selectedScene}
                                </div>
                            </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.setSwitchGroup('thermostat')}>
                                Nest
                            </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile">
                                -
                            </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile">
                                -
                            </div>
                        </GridCell>
                    </GridInner>
                </GridCell>
                <GridCell span="2">
                    <GridInner>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.setSwitchGroup('lights')}>
                                Lights
                            </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.setSwitchGroup('blinds')}>
                                Blinds
                            </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.setSwitchGroup('garage')}>
                                Garage
                            </div>
                        </GridCell>
                        <GridCell span="12">
                            <div className="homeTile" role="button" onClick={() => this.setSwitchGroup('locks')}>
                                Locks
                            </div>
                        </GridCell>
                    </GridInner>
                </GridCell>
                <GridCell span="6">
                    <GridInner>
                        {this.renderSwitchGroup()}
                    </GridInner>
                </GridCell>
            </Grid>
        )
    }
}

export default HomeThicc;