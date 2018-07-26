import { connect } from 'react-redux';
import * as weatherActions from './actions/WeatherActions.js'
import * as commonActions from '../common/actions/CommonActions.js'
import WeatherComponent from './components/WeatherComponent.js';
import {bindActionCreators} from 'redux'

const mapStateToProp = state => ({
    view: state.View,
    weatherDay: state.WeatherDay,
    weatherWeek: state.WeatherWeek,
})

const mapDispatchToProps = (dispatch) => ({
    setWeatherDay: bindActionCreators(weatherActions.setWeatherDay, dispatch),
    setWeatherWeek: bindActionCreators(weatherActions.setWeatherWeek, dispatch),
    switchView: bindActionCreators(commonActions.switchView, dispatch)
})

export default connect(mapStateToProp, mapDispatchToProps)(WeatherComponent);