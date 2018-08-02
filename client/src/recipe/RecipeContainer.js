import { connect } from 'react-redux';
import * as recipeActions from './actions/RecipeActions.js';
import * as commonActions from '../common/actions/CommonActions.js'
import RecipeComponent from './components/RecipeComponent.js';
import { bindActionCreators } from 'redux'

const mapStateToProp = state => ({
    view: state.View,
    recipe: state.Recipe,
})

const mapDispatchToProps = dispatch => ({
    setRecipe: bindActionCreators(recipeActions.setRecipe, dispatch),
    switchView: bindActionCreators(commonActions.switchView, dispatch)
})

export default connect(mapStateToProp, mapDispatchToProps)(RecipeComponent);