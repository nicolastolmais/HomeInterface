import { combineReducers } from 'redux';
import Reminders from '../../reminders/reducers/Reminders';
import WeatherDay from '../../weather/reducers/WeatherDay';
import WeatherWeek from '../../weather/reducers/WeatherWeek';
import Recipe from '../../recipe/reducers/Recipe';
import Cameras from '../../camera/reducers/Cameras';
import View from './View'

export default combineReducers({
    Reminders,
    WeatherDay,
    WeatherWeek,
    Recipe,
    Cameras,
    View,

})