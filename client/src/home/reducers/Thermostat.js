export default (state = thermostat, action) => {
    switch (action.type) {
        case 'SET_AMBIENT_TEMPERATURE':
            return { ...state, ambientTemperature: action.payload }
        case 'SET_TARGET_TEMPERATURE':
            return { ...state, targetTemperature: action.payload }
        case 'SET_HVAC':
            return { ...state, hvac: action.payload }
        case 'SET_LEAF':
            return { ...state, leaf: action.payload }
        case 'SET_AWAY':
            return { ...state, away: action.payload }
        case 'PRESET_THERMOSTAT':
            return action.payload
        default:
            return state
    }
}

const hvac = ["off", "heating", "cooling"]

const thermostat = {
    ambientTemperature: 60,
    targetTemperature: 70,
    hvac: 'off',
    leaf: false,
    away: false,
    numTicks: 60,
    minValue: 40,
    maxValue: 100
}