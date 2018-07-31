import { connect } from 'react-redux'
import * as commonActions from '../common/actions/CommonActions.js'
import TimeComponent from './components/TimeComponent.js'
import {bindActionCreators} from 'redux'

const mapStateToProp = state => ({
    view: state.View,
})

const mapDispatchToProps = (dispatch) => ({
    switchView: bindActionCreators(commonActions.switchView, dispatch)
})

export default connect(mapStateToProp, mapDispatchToProps)(TimeComponent);