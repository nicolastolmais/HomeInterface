import { connect } from 'react-redux';
import * as BaseActions from './actions/BaseActions.js'
import * as commonActions from '../common/actions/CommonActions.js'
import BaseComponent from './components/BaseComponent.js';
import { bindActionCreators } from 'redux'

const mapStateToProp = state => ({
    view: state.View,
})

const mapDispatchToProps = (dispatch) => ({
    switchView: bindActionCreators(commonActions.switchView, dispatch)
})

export default connect(mapStateToProp, mapDispatchToProps)(BaseComponent);