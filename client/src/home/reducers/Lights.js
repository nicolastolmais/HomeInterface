export default (state = null, action) => {
    switch (action.type) {
        case 'SET_ALL_LIGHTS':
            return action.payload
        default:
            return state;
    }
}