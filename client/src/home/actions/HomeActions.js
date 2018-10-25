export const setAllLights = lights => (
    {
        type: 'SET_ALL_LIGHTS',
        payload: lights
    }
)

export const setGarage = garage => (
    {
        type: 'SET_GARAGE',
        payload: garage
    }
)

export const setScene = scene => (
    {
        type: 'SET_SCENE',
        payload: scene
    }
)

export const setThermostatAmbientTemperature = ambientTemperature => (
    {
        type: 'SET_AMBIENT_TEMPERATURE',
        payload: ambientTemperature
    }
)
export const setThermostatTargetTemperature = targetTemperature => (
    {
        type: 'SET_TARGET_TEMPERATURE',
        payload: targetTemperature
    }
)
export const setThermostatHvac = hvac => (
    {
        type: 'SET_HVAC',
        payload: hvac
    }
)
export const setThermostatLeaf = isLeaf => (
    {
        type: 'SET_LEAF',
        payload: isLeaf
    }
)
export const setThermostatAway = isAway => (
    {
        type: 'SET_AWAY',
        payload: isAway
    }
)

export const presetThermostat = thermostat => (
    {
        type: 'PRESET_THERMOSTAT',
        payload: thermostat
    }
)

