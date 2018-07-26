export default (state = null, action) => {
    switch (action.type) {
        case 'SET_WEATHER_WEEK':
            return action.payload;
        default:
            return state;
    }
}