import { connect } from 'react-redux';
import * as cameraActions from './actions/CameraActions.js'
import * as commonActions from '../common/actions/CommonActions.js'
import CameraComponent from './components/CameraComponent.js';
import { bindActionCreators } from 'redux'

const mapStateToProp = state => ({
    view: state.View,
    cameras: state.Cameras,
})

const mapDispatchToProps = (dispatch) => ({
    setCameras: bindActionCreators(cameraActions.setCameras, dispatch),
    switchView: bindActionCreators(commonActions.switchView, dispatch)
})

export default connect(mapStateToProp, mapDispatchToProps)(CameraComponent);