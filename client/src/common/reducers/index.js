import { combineReducers } from 'redux';
import Reminders from '../../reminders/reducers/Reminders';
import WeatherDay from '../../weather/reducers/WeatherDay';
import WeatherWeek from '../../weather/reducers/WeatherWeek';
import View from './View'

export default combineReducers({
    Reminders,
    WeatherDay,
    WeatherWeek,
    View
})