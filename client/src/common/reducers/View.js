export default (state = 'thin', action) => {
    switch (action.type) {
        case 'SWITCH_VIEW':
            return action.payload;
        default:
            return state;
    }
}