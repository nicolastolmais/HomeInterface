import { connect } from 'react-redux';
import * as remindersActions from './actions/RemindersActions.js';
import * as commonActions from '../common/actions/CommonActions.js'
import RemindersComponent from './components/RemindersComponent.js';
import { bindActionCreators } from 'redux'


const mapStateToProp = state => ({
    view: state.View,
    reminders: state.Reminders,
})

const mapDispatchToProps = dispatch => ({
    setReminders: bindActionCreators(remindersActions.setReminders, dispatch),
    switchView: bindActionCreators(commonActions.switchView, dispatch)
})

export default connect(mapStateToProp, mapDispatchToProps)(RemindersComponent);