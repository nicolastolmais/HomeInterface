export default (state = null, action) => {
    switch (action.type) {
        case 'SET_REMINDERS':
            return action.payload
        case 'ADD_NEW_REMINDER':
            return state.push(action.payload);
        case 'TOGGLE_REMINDER_COMPLETE':
            return action.payload;
        default:
            return state;
    }
}