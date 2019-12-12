export const ADDING_FEATURE = "ADDING_FEATURE";
// export const UPDATE_FEATURES = "UPDATE_FEATURES"

export const add = feature => {
    return {type: ADDING_FEATURE, payload: feature }
}
