import { connect } from 'react-redux';
import * as HomeActions from './actions/HomeActions.js'
import * as commonActions from '../common/actions/CommonActions.js'
import HomeComponent from './components/HomeComponent.js';
import { bindActionCreators } from 'redux'

const mapStateToProp = state => ({
    view: state.View,
    lights: state.Lights,
    garage: state.Garage,
    scenes: state.Scenes,
    selectedScene: state.SelectedScene,
    thermostat: state.Thermostat
})

const mapDispatchToProps = (dispatch) => ({
    setGarage: bindActionCreators(HomeActions.setGarage, dispatch),
    setAllLights: bindActionCreators(HomeActions.setAllLights, dispatch),
    setScene: bindActionCreators(HomeActions.setScene, dispatch),
    setThermostatAmbientTemperature: bindActionCreators(HomeActions.setThermostatAmbientTemperature, dispatch),
    setThermostatTargetTemperature: bindActionCreators(HomeActions.setThermostatTargetTemperature, dispatch),
    setThermostatHvac: bindActionCreators(HomeActions.setThermostatHvac, dispatch),
    setThermostatLeaf: bindActionCreators(HomeActions.setThermostatLeaf, dispatch),
    setThermostatAway: bindActionCreators(HomeActions.setThermostatAway, dispatch),
    presetThermostat: bindActionCreators(HomeActions.presetThermostat, dispatch),
    switchView: bindActionCreators(commonActions.switchView, dispatch)
})

export default connect(mapStateToProp, mapDispatchToProps)(HomeComponent);