export default (state = null, action) => {
    switch (action.type) {
        case 'SET_WEATHER_DAY':
            return action.payload;
        default:
            return state;
    }
}