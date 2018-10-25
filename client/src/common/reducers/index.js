import { combineReducers } from 'redux';
import Reminders from '../../reminders/reducers/Reminders';
import WeatherDay from '../../weather/reducers/WeatherDay';
import WeatherWeek from '../../weather/reducers/WeatherWeek';
import Recipe from '../../recipe/reducers/Recipe';
import Cameras from '../../camera/reducers/Cameras';
import Lights from '../../home/reducers/Lights';
import Garage from '../../home/reducers/Garage';
import Scenes from '../../home/reducers/Scenes';
import SelectedScene from '../../home/reducers/SelectedScene';
import Thermostat from '../../home/reducers/Thermostat'; 
import View from './View'

export default combineReducers({
    Reminders,
    WeatherDay,
    WeatherWeek,
    Recipe,
    Cameras,
    Lights,
    Garage,
    Scenes,
    SelectedScene,
    Thermostat,
    View,

})