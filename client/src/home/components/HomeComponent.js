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
        this.getHomeInformation()
    }

    getHomeInformation() {
        fetch('http://localhost:3001/allLights')
            .then(response => response.json())
            .then(json => {
                this.props.setAllLights(json)
            })
        fetch('http://localhost:3001/garage')
            .then(response => response.json())
            .then(json => {
                this.props.setGarage(json)
            })
    }

    moveBlinds(blindTarget, command) {
        console.log('Move blind: ', blindTarget, ' ', command)
        //     fetch('http://localhost:3001/blinds',
        //         {
        //             method: 'PUT',
        //             mode: 'cors',
        //             headers: {
        //                 "Content-Type": "application/json; charset=utf-8",
        //             },
        //             body: JSON.stringify({
        //                 blindTarget,
        //                 command
        //             })
        //         })
        //         .then(response => response.json())
        //         .catch(error => console.error(`Fetch Error =\n`, error))
    }


    render() {
        switch (this.props.view) {
            case 'thin': {
                return (
                    <GridCell className="tile" span="4">
                        <HomeThin
                            switchView={this.props.switchView}
                            selectedScene={this.props.selectedScene}
                        />
                    </GridCell>
                )
            }
            case 'home': {
                return (
                    <GridCell className="tile" span="12">
                        <HomeThicc
                            switchView={this.props.switchView}
                            lights={this.props.lights}
                            garage={this.props.garage}
                            moveBlinds={this.moveBlinds}
                            scenes={this.props.scenes}
                            selectedScene={this.props.selectedScene}
                            setScene={this.props.setScene}
                            thermostat={this.props.thermostat}
                            setThermostatAmbientTemperature={this.props.setThermostatAmbientTemperature}
                            setThermostatTargetTemperature={this.props.setThermostatTargetTemperature}
                            setThermostatHvac={this.props.setThermostatHvac}
                            setThermostatLeaf={this.props.setThermostatLeaf}
                            setThermostatAway={this.props.setThermostatAway}
                            presetThermostat={this.props.presetThermostat}
                            
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