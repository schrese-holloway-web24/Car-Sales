export const ADDING_FEATURE = "ADDING_FEATURE";
export const REMOVING_FEATURE = "REMOVING_FEATURE";

export const add = feature => {
    return {type: ADDING_FEATURE, payload: feature }
}

export const remove = feature => {
    return {type: REMOVING_FEATURE, payload: feature}
}