export default (state = null, action) => {
    switch (action.type) {
        case 'SET_GARAGE':
            return action.payload
        default:
            return state;
    }
}