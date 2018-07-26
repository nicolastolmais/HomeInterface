export const addNewReminder = reminder => (
    {
        type: 'ADD_NEW_REMINDER',
        payload: reminder
    }
)

export const toggleReminderComplete = reminder => (
    {
        type: 'TOGGLE_REMINDER_COMPLETE',
        payload: reminder
    }
)

export const setReminders = reminders => (
    {
        type: 'SET_REMINDERS',
        payload: reminders
    }
)


