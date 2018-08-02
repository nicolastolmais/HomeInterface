import { connect } from 'react-redux';
import * as HomeActions from './actions/HomeActions.js'
import * as commonActions from '../common/actions/CommonActions.js'
import HomeComponent from './components/HomeComponent.js';
import { bindActionCreators } from 'redux'

const mapStateToProp = state => ({
    view: state.View,
})

const mapDispatchToProps = (dispatch) => ({
    switchView: bindActionCreators(commonActions.switchView, dispatch)
})

export default connect(mapStateToProp, mapDispatchToProps)(HomeComponent);