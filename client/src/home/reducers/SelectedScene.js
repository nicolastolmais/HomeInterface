export default (state = "party", action) => {
    switch (action.type) {
        case 'SET_SCENE':
            return action.payload
        default:
            return state
    }
}